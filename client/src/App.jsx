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
      </Routes>
    </>
  );
};

export default App;
