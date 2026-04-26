import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Banner from "../home/Banner";

/**
 * MainLayout handles the global structure of the application.
 * It conditionally renders components based on the current route.
 */
const MainLayout = () => {
  const location = useLocation();

  // Logic to determine if we are on the checkout page
  const isCheckout = location.pathname === "/checkout";

  // Logic to hide layout elements for specific dashboard/profile routes
  const hideGlobalLayout =
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/user-dashboard") ||
    location.pathname === "/cart";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Banner acts as the SearchHeader/Top announcement bar */}
      {!hideGlobalLayout && <Banner />}

      {/* Navbar (Navigation) is hidden on checkout for a focused experience */}
      {!hideGlobalLayout && !isCheckout && <Navigation />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer is hidden on checkout to reduce distractions */}
      {!hideGlobalLayout && !isCheckout && <Footer />}
    </div>
  );
};

export default MainLayout;
