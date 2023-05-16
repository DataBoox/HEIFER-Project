import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import MaterialReactTable, {
  MRT_ColumnDef,
  MRT_Row
} from "material-react-table";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { TableActionButtons } from "./components/actionButtons";
import { ExportToCsv } from "export-to-csv";
import { BaseMaterialTableProps } from "./interface";

type TableData = any;

interface AllProjectsTableProps extends BaseMaterialTableProps {
    data?: TableData[],
    columns?: MRT_ColumnDef<TableData>[]
}


export const ThemeTable: React.FC<AllProjectsTableProps> = ({
  data = [],
  columns = [], 
  rowTotal,
  isLoading = false,
}) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
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

  const handleExportRows = (rows: MRT_Row<any>[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => csvExporter.generateCsv(data);

  return (
    <MaterialReactTable
      // tableInstanceRef={tableRef}
      columns={columns}
      data={data}
      enableRowSelection
      manualFiltering
      manualPagination
      manualSorting
      initialState={{ showColumnFilters: false }}
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowTotal}
      muiTableBodyCellProps={{ sx: { border: "0.8px solid #e3eaef" } }}
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
        SortIcon: (props: any) => <FiArrowDown {...props} />,
      }}
    />
  );
};
