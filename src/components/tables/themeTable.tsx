import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import MaterialReactTable, {
  MRT_Row,
  MRT_TableInstance,
} from "material-react-table";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { useAllProjectsColumn } from "./columns";
import { TableActionButtons } from "./components/actionButtons";
import { ExportToCsv } from "export-to-csv";
import { Button } from "@mui/material";
import { FaArchive, FaFileImport, FaTrash, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Project } from "@store/projects";

interface AllProjectsTableProps {
  data?: Project[];
  rowTotal?: number;
  isLoading?: boolean;
  tableRef?: React.MutableRefObject<MRT_TableInstance<Project> | null>;
  handleDeleteSelected?: (rows: MRT_Row<Project>[]) => void;
}

export const ThemeTable: React.FC<AllProjectsTableProps> = ({
  data = [],
  rowTotal,
  tableRef,
  isLoading = false,
  handleDeleteSelected = () => {},
}) => {
  const navigate = useNavigate();
  const columns = useAllProjectsColumn();
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

  const handleExportRows = (rows: MRT_Row<Project>[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => csvExporter.generateCsv(data);

  return (
    <MaterialReactTable
      tableInstanceRef={tableRef}
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
          handleDeleteSelected={() =>
            handleDeleteSelected(table.getSelectedRowModel().rows)
          }
          handleExportAllData={handleExportData}
          deleteText={"Archive Selected"}
          deleteButtonProps={{ startIcon: <FaArchive size={12} /> }}
          afterDeleteComponents={
            Boolean(
              table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()
            ) ? (
              <Button
                color="error"
                variant="contained"
                onClick={() =>
                  handleDeleteSelected(table.getSelectedRowModel().rows)
                }
                startIcon={<FaTrash size={12} color={"#fff"} />}
                className={"fw-bold"}
              >
                Delete Records
              </Button>
            ) : null
          }
          extraComponents={
            <>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {}}
                startIcon={<FaFileImport size={12} />}
                className={"fw-bold"}
              >
                Import Records
              </Button>
              <Button
                color="info"
                variant="contained"
                onClick={() => navigate("/church/archived")}
                startIcon={<FaUsers size={12} />}
                className={"fw-bold"}
              >
                Archived Members
              </Button>
            </>
          }
        />
      )}
      icons={{
        SortIcon: (props: any) => <FiArrowDown {...props} />,
      }}
    />
  );
};
