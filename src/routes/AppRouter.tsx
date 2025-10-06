import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/layout/Layout";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../pages/account/login/Login";
import Register from "../pages/account/register/Register";
import ForgotPassword from "../pages/account/forgotPassword/ForgotPassword";
import Verify from "../pages/account/verify/Verify";
import Products from "../pages/products/Products";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify" element={<Verify />} />
      </Route>
    </Routes>
  );
}
