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
import Addresses from "./pages/AddressesPage";
import Orders from "./pages/OrdersPage";
import Prescriptions from "./pages/PrescriptionsPage";
import GiftCards from "./pages/GiftCardsPage";
import Privacy from "./pages/PrivacyPage";
import EditProfilePage from "./pages/EditProfilePage";

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
          path="profile/edit"
          element={
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile/addresses"
          element={
            <ProtectedRoute>
              <Addresses />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile/prescriptions"
          element={
            <ProtectedRoute>
              <Prescriptions />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile/gift-cards"
          element={
            <ProtectedRoute>
              <GiftCards />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile/privacy"
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
