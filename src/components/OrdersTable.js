import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { FiEdit } from "react-icons/fi";
import PaginationComponent from "./PaginationComponent ";

const OrdersTable = ({ filteredOrders, page, rowsPerPage, columns }) => {
  return (
    <div className="m-4">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(
              (column, index) =>
                column.checked && (
                  <TableCell key={index}>{column.label}</TableCell>
                )
            )}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOrders
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((order, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map(
                  (column, colIndex) =>
                    column.checked && (
                      <TableCell key={colIndex}>
                        {order[column.label.toLowerCase()]}
                      </TableCell>
                    )
                )}
                <TableCell>
                  <IconButton>
                    <FiEdit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersTable;
