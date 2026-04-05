import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Categories from "./pages/Categories";
import MainLayout from "./components/layout/MainLayout";

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

        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="user-dashboard" element={<UserDashboard />} />
        
        <Route path="profile" element={<Profile />} />
        <Route path="addresses" element={<Addresses />} />
        <Route path="orders" element={<Orders />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="gift-cards" element={<GiftCards />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </>
  );
};

export default App;
