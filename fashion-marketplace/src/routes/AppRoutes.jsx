import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Auth/Login";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ShopPage from "../pages/Shop/ShopPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import CartPage from "../pages/Cart/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/shop"
        element={
          <MainLayout>
            <ShopPage />
          </MainLayout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <MainLayout>
            <ProductDetailsPage />
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <CartPage />
          </MainLayout>
        }
      />

      {/* Auth Pages */}
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      {/* Vendor Dashboard */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardHome />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
