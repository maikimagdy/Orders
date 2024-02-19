import React from "react";
import { TextField, MenuItem, Card } from "@mui/material";

const Filter = ({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <Card className="m-4 ">
      <h1 className=" mx-4 text-lg font-bold text-gray-800">
        What are You looking for ?
      </h1>
      <div className="flex justify-between p-4">
        <TextField
          label="Search"
          value={searchTerm}
          placeholder="Search for catrgory,name,company,etc"
          className="w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TextField
          select
          label="Category"
          className="w-1/3"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
        </TextField>
        <TextField
          select
          className="w-1/3"
          label="Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </TextField>
      </div>
    </Card>
  );
};

export default Filter;
