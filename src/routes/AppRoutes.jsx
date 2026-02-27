import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductList from "../pages/products/ProductList";

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
      </Route>
    </Routes>
  );
};

export default AppRoutes;