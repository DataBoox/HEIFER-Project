import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import MaterialReactTable from "material-react-table";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { TableActionButtons } from "./components/actionButtons";
import { ExportToCsv } from "export-to-csv";
import { BaseMaterialTableProps } from "./interface";
import { MaterialProviderLoader } from "providers";
import { useDefaultColumn } from "./columns";

type TableData = any;

interface ThemeTableProps extends BaseMaterialTableProps {
}


export const ThemeTable: React.FC<ThemeTableProps> = ({
  data,
  columns,
  rowTotal,
  isLoading = false,
  ...rest
}) => {
  const defaultColumn = useDefaultColumn()
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 15,
  });
  const csvExporter = new ExportToCsv({
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  });

  const handleExportRows = (rows: any[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => csvExporter.generateCsv(data);
  return (
    <MaterialProviderLoader>
      <MaterialReactTable
        // tableInstanceRef={tableRef}
        columns={columns as any}
        data={data}
        enableRowSelection
        initialState={{ showColumnFilters: false }}
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        rowCount={rowTotal}
        muiTableBodyCellProps={{
          sx: { border: "0.8px solid #e3eaef", fontSize: "1rem" },
        }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: "#2A4153",
            color: "#ffff",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "capitalize",
          },
        }}
        state={{
          sorting,
          columnFilters,
          globalFilter,
          isLoading,
          pagination,
        }}
        enableRowActions
        positionActionsColumn="last"
        renderTopToolbarCustomActions={({ table }) => (
          <TableActionButtons
            table={table}
            hasSelectedRows={
              table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()
            }
            handleExportRows={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            handleExportPageRows={() =>
              handleExportRows(table.getRowModel().rows)
            }
            handleExportSelectedRows={() =>
              handleExportRows(table.getSelectedRowModel().rows)
            }
            handleExportAllData={handleExportData}
          />
        )}
        icons={{
          SortIcon: (props: any) => (
            <FiArrowDown {...props}/>
          ),
        }}
        {...rest}
      />
    </MaterialProviderLoader>
  );
};
