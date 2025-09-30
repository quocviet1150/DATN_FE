import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/layout/Layout";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../components/common/login/Login";
import Register from "../components/common/register/Register";
import ForgotPassword from "../components/common/forgotPassword/ForgotPassword";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}
