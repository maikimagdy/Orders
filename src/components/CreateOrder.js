import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateOrder = ({ orders, setorders }) => {
  const [newOrder, setNewOrder] = useState({
    id: "",
    user: "",
    category: "",
    status: "Pending",
    email: "",
    country: "",
    ordertype: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const navigator = useNavigate();

  const isAnyInputEmpty = () => {
    for (const key in newOrder) {
      if (newOrder[key].trim() === "") {
        return true;
      }
    }
    return false;
  };

  const handleCreateOrder = () => {
    if (isAnyInputEmpty()) {
      return;
    }
    setorders((prev) => [...prev, newOrder]);
    navigator("/");
  };
  return (
    <div className="m-4">
      <div className="popup-inner">
        <h2>Add New Order</h2>
        <form>
          <TextField
            label="ID"
            name="id"
            value={newOrder.id}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="User"
            name="user"
            value={newOrder.user}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={newOrder.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            name="status"
            value={newOrder.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={newOrder.email}
            onChange={handleChange}
            fullWidth
            type="email"
            margin="normal"
          />
          <TextField
            label="Country"
            name="country"
            value={newOrder.country}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ordertype"
            name="ordertype"
            value={newOrder.ordertype}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            type="date"
            name="date"
            value={newOrder.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateOrder}
            disabled={isAnyInputEmpty()}
          >
            Add Order
          </Button>
        </form>
        {isAnyInputEmpty() && (
          <p className="text-red-500">All fields must be filled </p>
        )}{" "}
      </div>
    </div>
  );
};

export default CreateOrder;
