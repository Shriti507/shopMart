import { ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navigation() {
  const location = useLocation();
  const { isAuthenticated, cartItemCount, user } = useAuth();

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-8 xl:px-12 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#dac889] to-[#c3ae6d] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(218,200,137,0.3)] group-hover:scale-105 transition-transform duration-300">
            <ShoppingCart
              size={20}
              className="text-[#1b2316]"
              strokeWidth={2.5}
            />
          </div>
          <span className="text-[22px] font-extrabold tracking-tight text-gray-900 group-hover:text-[#dac889] transition-colors">
            shop<span className="text-[#dac889]">Smart</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-widest uppercase">
          <Link
            to="/"
            className={`${location.pathname === "/" ? "text-[#dac889] border-b-2 border-[#dac889] pb-1.5" : "text-gray-500 hover:text-[#dac889]"} transition-all`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`${location.pathname === "/services" ? "text-[#dac889] border-b-2 border-[#dac889] pb-1.5" : "text-gray-500 hover:text-[#dac889]"} transition-all`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`${location.pathname === "/about" ? "text-[#dac889] border-b-2 border-[#dac889] pb-1.5" : "text-gray-500 hover:text-[#dac889]"} transition-all`}
          >
            About Us
          </Link>
          <Link
            to="/categories"
            className={`${location.pathname === "/categories" ? "text-[#dac889] border-b-2 border-[#dac889] pb-1.5" : "text-gray-500 hover:text-[#dac889]"} transition-all`}
          >
            Categories
          </Link>
          <Link
            to="/contact"
            className={`${location.pathname === "/contact" ? "text-[#dac889] border-b-2 border-[#dac889] pb-1.5" : "text-gray-500 hover:text-[#dac889]"} transition-all`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            to={isAuthenticated ? "/user-dashboard" : "/login"}
            className="flex items-center gap-3 text-gray-600 hover:text-[#dac889] transition-all group"
          >
            <div className="w-10 h-10 border border-gray-200 bg-gray-50 rounded-full flex items-center justify-center shadow-inner group-hover:border-[#dac889]/30 group-hover:bg-[#2a3622] transition-all">
              <User
                size={18}
                className="text-[#dac889] group-hover:scale-110 transition-transform"
                strokeWidth={2}
              />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-[13px] font-bold text-gray-800 group-hover:text-[#dac889] leading-none transition-colors">
                {isAuthenticated ? user?.name || "Dashboard" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="w-px h-8 bg-gray-200 hidden md:block"></div>{" "}
          {/* Divider */}
          <Link
            to="/cart"
            className="relative w-11 h-11 bg-gray-50 border-gray-200 hover:bg-gray-100 border rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
          >
            <ShoppingCart
              size={18}
              className="text-[#dac889] group-hover:scale-110 transition-transform"
              strokeWidth={2}
            />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-tr from-[#af3a3a] to-[#e85a5a] text-white text-[10px] font-black w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(175,58,58,0.5)] border-2 border-white">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
