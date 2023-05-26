import {
  Box,
  Button,
  ButtonProps, Menu,
  MenuItem
} from "@mui/material";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
import React from "react";
// import { ContentPaste } from "@mui/icons-material";
import { BsChevronDown } from "react-icons/bs";
import { FaFileExport, FaTrash } from "react-icons/fa";

interface TableActionButtonsProps {
  table: any;
  handleExportAllData?: () => void;
  handleExportRows?: () => void;
  handleExportPageRows?: () => void;
  handleExportSelectedRows?: () => void;
  handleDeleteSelected?: () => void;
  hasSelectedRows?: boolean;
  canDeleteRows?: boolean;
  startComponents?: React.ReactNode;
  afterDeleteComponents?: React.ReactNode;
  extraComponents?: React.ReactNode;
  deleteText?: string;
    deleteButtonProps?: ButtonProps;
}
export const TableActionButtons: React.FC<TableActionButtonsProps> = ({
  table,
  handleExportAllData,
  handleExportRows,
  handleExportPageRows,
  handleExportSelectedRows,
  handleDeleteSelected,
  hasSelectedRows,
  canDeleteRows = true,
  startComponents,
  afterDeleteComponents,
  extraComponents,
  deleteText = "Delete Selected",
  deleteButtonProps,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (action: () => void = () => {}) => {
    setAnchorEl(null);
    action();
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        p: "0.5rem",
        flexWrap: "wrap",
        zIndex: 9999999,
      }}
    >
      {startComponents}

      {Boolean(hasSelectedRows) && canDeleteRows && (
        <Button
          style={{ backgroundColor: "red", fontWeight: "bold" }}
          variant="contained"
          onClick={handleDeleteSelected}
          startIcon={<FaTrash size={12} />}
          className={"fw-bold"}
          {...deleteButtonProps}
          sx={{
            "&:hover": {
              transition: "background-color 0.5s ease-in-out",
              // Add any other styles for the hover effect
            },
          }}
        >
          {deleteText}
        </Button>
      )}

      {afterDeleteComponents}

      <Button
        color="primary"
        variant="contained"
        id="export-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={"fw-bold"}
        startIcon={<FaFileExport size={12} />}
        endIcon={<BsChevronDown size={12} />}
        sx={{
          "&:hover": {
            transition: "background-color 0.5s ease-in-out",
            // Add any other styles for the hover effect
          },
        }}
      >
        Export Records
      </Button>

      {extraComponents}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose(handleExportAllData)}>
          Export All Data
        </MenuItem>
        <MenuItem
          onClick={() => handleClose(handleExportRows)}
          disabled={table.getPrePaginationRowModel().rows.length === 0}
        >
          Export All Rows
        </MenuItem>
        <MenuItem
          onClick={() => handleClose(handleExportPageRows)}
          disabled={table.getRowModel().rows.length === 0}
        >
          Export Page Rows
        </MenuItem>
        <MenuItem
          onClick={() => handleClose(handleExportSelectedRows)}
          disabled={!hasSelectedRows}
        >
          Export Selected Rows
        </MenuItem>
      </Menu>
    </Box>
  );
};
