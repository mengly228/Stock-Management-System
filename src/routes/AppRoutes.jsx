import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductList from "../pages/products/ProductList";
import StockIn from "../pages/stock/StockIn";
import StockOut from "../pages/stock/StockOut";
import SalesEntry from "../pages/sales/SalesEntry";
import SalesHistory from "../pages/sales/SalesHistory";
import ProfitReport from "../pages/reports/ProfitReport";
import StockReport from "../pages/reports/StockReport";
import UserList from "../pages/users/UserList";
import RoleManagement from "../pages/users/RoleManagement";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="stock-in" element={<StockIn />} />
        <Route path="stock-out" element={<StockOut />} />
        <Route path="sales" element={<SalesEntry />} />
        <Route path="sales-history" element={<SalesHistory />} />
        <Route path="profit-report" element={<ProfitReport />} />
        <Route path="stock-report" element={<StockReport />} />
        <Route path="users" element={<UserList />} />
        <Route path="roles" element={<RoleManagement />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;