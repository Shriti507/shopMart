import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Categories from "./pages/Categories";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Profile Routes
import Profile from "./pages/Profile";
import Addresses from "./pages/Addresses";
import Orders from "./pages/Orders";
import Prescriptions from "./pages/Prescriptions";
import GiftCards from "./pages/GiftCards";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="categories"
          element={
            <MainLayout>
              <Categories />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CartPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CheckoutPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />

        {/* Protected Dashboard and Profile Routes */}
        <Route
          path="user-dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <UserDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="addresses"
          element={
            <ProtectedRoute>
              <Addresses />
            </ProtectedRoute>
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="prescriptions"
          element={
            <ProtectedRoute>
              <Prescriptions />
            </ProtectedRoute>
          }
        />
        <Route
          path="gift-cards"
          element={
            <ProtectedRoute>
              <GiftCards />
            </ProtectedRoute>
          }
        />
        <Route
          path="privacy"
          element={
            <ProtectedRoute>
              <Privacy />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
