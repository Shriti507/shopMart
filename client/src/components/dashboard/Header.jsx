import React, { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = ({ cartCount: cartCountProp }) => {
  const { cartItemCount } = useAuth();
  const cartCount = cartCountProp ?? cartItemCount;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-4 sticky top-4 z-50 w-full transition-all duration-300">
      <header className="w-full bg-[#1b2316]/95 backdrop-blur-xl rounded-2xl shadow-sm overflow-hidden flex flex-col border border-white/5">
        <div className="px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/user-dashboard"
              className="flex items-center gap-3 group hidden sm:flex"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#dac889] to-[#c3ae6d] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(218,200,137,0.3)] group-hover:scale-105 transition-transform duration-300">
                <ShoppingCart
                  size={20}
                  className="text-[#1b2316]"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-[22px] font-extrabold tracking-tight text-white group-hover:text-[#dac889] transition-colors">
                shop<span className="text-[#dac889]">Smart</span>
              </span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl hidden md:flex items-center bg-white rounded-2xl border border-white/10 overflow-hidden focus-within:border-[#dac889]/50 focus-within:ring-2 focus-within:ring-[#dac889]/10 transition-all shadow-inner h-[50px]">
            <input
              type="text"
              placeholder="Search for Grocery, Stores, Vegetable or Meat"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-gray-900 px-6 h-full w-full outline-none placeholder-gray-500 font-medium"
            />
            <button className="bg-[#dac889] hover:bg-[#cbb671] text-[#1b2316] h-full px-6 flex items-center gap-2 font-bold tracking-wide transition-colors">
              <Search size={18} strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden lg:flex items-center text-sm font-bold tracking-wide text-[#dac889] bg-[#dac889]/10 px-4 py-2 rounded-xl border border-[#dac889]/20">
              Order now & get it within 15 min!
            </div>

            <Link
              to="/cart"
              className="relative w-11 h-11 bg-[#212b1b] border-white/10 hover:bg-[#2a3622] border rounded-full flex items-center justify-center transition-all shadow-sm group"
            >
              <ShoppingCart
                size={18}
                className="text-[#dac889] group-hover:scale-110 transition-transform"
                strokeWidth={2}
              />
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-tr from-[#af3a3a] to-[#e85a5a] text-white text-[10px] font-black w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(175,58,58,0.5)] border-2 border-[#1b2316]">
                {cartCount}
              </span>
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-3 text-gray-400 hover:text-[#dac889] transition-all group"
            >
              <div className="w-11 h-11 border border-white/10 bg-[#212b1b] rounded-full flex items-center justify-center shadow-inner group-hover:border-[#dac889]/30 group-hover:bg-[#2a3622] transition-all overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="md:hidden px-6 pb-4">
          <div className="flex items-center bg-white rounded-xl border border-white/10 overflow-hidden focus-within:border-[#dac889]/50 transition-all h-[46px] shadow-inner">
            <input
              type="text"
              placeholder="Search groceries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-gray-900 px-4 h-full w-full outline-none placeholder-gray-500 font-medium text-sm"
            />
            <button className="bg-[#dac889] text-[#1b2316] h-full px-5 flex items-center justify-center active:bg-[#cbb671]">
              <Search size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
