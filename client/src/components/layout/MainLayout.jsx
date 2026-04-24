import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Banner from "../home/Banner";

const MainLayout = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const shouldHideNavbar = user || location.pathname === "/cart";

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      {!shouldHideNavbar && <Navigation />}
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
