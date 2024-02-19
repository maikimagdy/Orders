import React, { useState } from "react";
import {
  Button,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Pagination as MuiPagination,
} from "@mui/material";
import { IoFilter } from "react-icons/io5";
const PaginationComponent = ({
  count,
  page,
  onChange,
  rowsPerPage,
  handleChangeRowsPerPage,
  columns,
  setColumns,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColumnToggle = (index) => {
    const newColumns = [...columns];
    newColumns[index].checked = !newColumns[index].checked;
    setColumns(newColumns);
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg mx-4 font-bold text-gray-800">Product Summery </h1>
      <Button variant="contained" size="small">
        Despatch selected{" "}
      </Button>
      <IconButton onClick={handleClick}>
        <IoFilter />
        <span className="text-sm font-bold ml-1">Columns</span>
      </IconButton>
      <Menu
        id="column-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {columns.map((column, index) => (
          <MenuItem key={index}>
            <Checkbox
              checked={column.checked}
              onChange={() => handleColumnToggle(index)}
            />
            {column.label}
          </MenuItem>
        ))}
      </Menu>
      <MuiPagination
        className=""
        count={count}
        page={page}
        onChange={onChange}
        rowsPerPage={rowsPerPage}
        onPageChange={onChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PaginationComponent;
