import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/Login";

import ProductList from "../pages/products/ProductList";
import AddProduct from "../pages/products/AddProduct";

import StockIn from "../pages/stock/StockIn";
import StockOut from "../pages/stock/StockOut";

import SalesEntry from "../pages/sales/SalesEntry";
import SalesHistory from "../pages/sales/SalesHistory";

import ProfitReport from "../pages/reports/ProfitReport";
import StockReport from "../pages/reports/StockReport";

import RoleManagement from "../pages/users/RoleManagement";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />

      <Route path="/products" element={<ProductList />} />
      <Route path="/products/add" element={<AddProduct />} />

      <Route path="/stock-in" element={<StockIn />} />
      <Route path="/stock-out" element={<StockOut />} />

      <Route path="/sales" element={<SalesEntry />} />
      <Route path="/sales-history" element={<SalesHistory />} />

      <Route path="/reports/profit" element={<ProfitReport />} />
      <Route path="/reports/stock" element={<StockReport />} />

      <Route path="/users" element={<RoleManagement />} />
    </Routes>
  );
}
