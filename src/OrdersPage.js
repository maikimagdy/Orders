import React, { useState } from "react";

import OrdersTable from "./components/OrdersTable";
import Filter from "./components/Filter";
import PaginationComponent from "./components/PaginationComponent ";
import {
  TextField,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  IconButton,
  Pagination,
  Card,
} from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const OrdersPage = ({ orders, setorders }) => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // Sample orders data
  // Filtering orders based on search term, category, and status
  const filteredOrders = orders.filter((order) => {
    const userMatches = order.user
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const countryMatches = order.country
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatches =
      order.category === categoryFilter || categoryFilter === "";
    const statusMatches = order.status === statusFilter || statusFilter === "";

    return (userMatches || countryMatches) && categoryMatches && statusMatches;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const nav = useNavigate();

  const [columns, setColumns] = useState([
    { label: "Id", checked: true },
    { label: "User", checked: true },
    { label: "Category", checked: true },
    { label: "Status", checked: true },
    { label: "Email", checked: true },
    { label: "Country", checked: true },
    { label: "Ordertype", checked: true },
    { label: "Date", checked: true },
  ]);

  return (
    <div>
      <div className="flex justify-between m-4">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => nav("/create")}
        >
          Create New
        </Button>
      </div>
      <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <Card className="p-4  rounded shadow-lg my-2 mx-4">
        <PaginationComponent
          count={Math.ceil(filteredOrders.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          columns={columns}
          setColumns={setColumns}
        />
        <OrdersTable
          filteredOrders={filteredOrders}
          page={page}
          rowsPerPage={rowsPerPage}
          columns={columns}
        />
      </Card>
    </div>
  );
};

export default OrdersPage;
