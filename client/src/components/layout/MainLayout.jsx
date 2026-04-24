import React from "react";
import { useLocation } from "react-router-dom";
// import { useAuth } from "../../context/useAuth";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Banner from "../home/Banner";

const MainLayout = ({ children }) => {
  // const { user } = useAuth();
  const location = useLocation();
  const hideLayout =
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/user-dashboard") ||
    location.pathname === "/cart";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Banner />}
      {!hideLayout && <Navigation />}
      <main className="flex-grow flex flex-col">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainLayout;
