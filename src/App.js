import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import OrdersPage from "./OrdersPage";
import CreateOrder from "./components/CreateOrder";
import { useState } from "react";

function App() {
  const [orders, setorders] = useState([
    {
      id: 1,
      user: "John",
      email: "John.123@gmail.com",
      country: "Egypt",
      ordertype: "customer",
      date: "12 jan 2022",
      category: "Clothing",
      status: "Completed",
    },
    {
      id: 2,
      user: "Ahmed",
      email: "Ahmed.123@gmail.com",
      country: "Australia",
      ordertype: "customer",
      date: "12 jan 2022",
      category: "Electronics",
      status: "Pending",
    },
    {
      id: 3,
      user: "Ahmed",
      email: "Ahmed.123@gmail.com",
      country: "Australia",
      ordertype: "customer",
      date: "12 jan 2022",
      category: "Electronics",
      status: "Pending",
    },
    {
      id: 4,
      user: "Ahmed",
      email: "Ahmed.123@gmail.com",
      country: "Australia",
      ordertype: "customer",
      date: "12 jan 2022",
      category: "Electronics",
      status: "Pending",
    },
    {
      id: 5,
      user: "Ahmed",
      email: "Ahmed.123@gmail.com",
      country: "Australia",
      ordertype: "customer",
      date: "12 jan 2022",
      category: "Electronics",
      status: "Pending",
    },
    {
      id: 6,
      user: "Ahmed",
      email: "Ahmed.123@gmail.com",
      country: "Australia",
      ordertype: "customer",
      date: "12 jan 2022",
      category: "Electronics",
      status: "Pending",
    },
    {
      id: 7,
      user: "Ahmed",
      email: "Ahmed.123@gmail.com",
      country: "Australia",
      ordertype: "customer",
      date: "12 jan 2022",
      category: "Electronics",
      status: "Pending",
    },
  ]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<OrdersPage orders={orders} setorders={setorders} />}
        />
        <Route
          path="/create"
          element={<CreateOrder orders={orders} setorders={setorders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
