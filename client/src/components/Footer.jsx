import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9FAFB] text-[#4B5563] font-sans shadow-[0_-10px_30px_rgba(0,0,0,0.05)] py-[100px] px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative rounded-[24px] overflow-hidden mb-24 group shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.01]">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
              alt="Newsletter Background"
              className="w-full h-full object-cover opacity-10 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-white"></div>
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-[#111827] mb-6 tracking-tighter leading-tight uppercase">
                STAY FRESH WITH <br />
                <span className="text-[#2a3622]">SHOPSMART UPDATES</span>
              </h3>
              <p className="text-[#4B5563] font-medium text-lg leading-relaxed">
                Join 50,000+ happy shoppers and get exclusive deals delivered
                weekly.
              </p>
            </div>

            <div className="w-full lg:w-max flex flex-col sm:flex-row gap-4 bg-gray-50 p-2 rounded-[28px] border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <div className="relative flex-1 min-w-[320px]">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                  size={22}
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-none rounded-2xl py-5 pl-14 pr-6 text-[#111827] outline-none focus:ring-0 transition-all font-bold text-sm"
                />
              </div>
              <button className="bg-[#D4AF37] hover:bg-[#1b2316] text-white font-black px-10 py-5 rounded-[22px] transition-all shadow-xl whitespace-nowrap active:scale-95 tracking-widest uppercase text-xs">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 pb-20 border-b border-black/[0.03]">
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#1b2316] group-hover:bg-[#1b2316] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
              <Truck size={30} />
            </div>
            <div>
              <h4 className="text-[#111827] font-black text-lg leading-tight uppercase tracking-wide">
                Fast Delivery
              </h4>
              <p className="text-xs mt-1 font-bold text-[#9CA3AF]">
                Free over $50
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#1b2316] group-hover:bg-[#1b2316] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
              <RotateCcw size={30} />
            </div>
            <div>
              <h4 className="text-[#111827] font-black text-lg leading-tight uppercase tracking-wide">
                Easy Returns
              </h4>
              <p className="text-xs mt-1 font-bold text-[#9CA3AF]">
                30 days policy
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#1b2316] group-hover:bg-[#1b2316] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
              <ShieldCheck size={30} />
            </div>
            <div>
              <h4 className="text-[#111827] font-black text-lg leading-tight uppercase tracking-wide">
                Secure Pay
              </h4>
              <p className="text-xs mt-1 font-bold text-[#9CA3AF]">
                100% Protected
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#1b2316] group-hover:bg-[#1b2316] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
              <CreditCard size={30} />
            </div>
            <div>
              <h4 className="text-[#111827] font-black text-lg leading-tight uppercase tracking-wide">
                VIP Deals
              </h4>
              <p className="text-xs mt-1 font-bold text-[#9CA3AF]">
                Exclusive Offers
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1b2316] to-[#121a10] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <ShoppingCart
                  size={24}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-3xl font-black tracking-tighter text-[#111827] uppercase">
                Shop<span className="text-[#D4AF37]">Smart</span>
              </span>
            </Link>
            <p className="max-w-sm text-[#4B5563] font-medium leading-relaxed mb-10 text-sm">
              Experience the future of grocery shopping. Premium quality,
              farm-fresh produce delivered with lightning speed.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4B5563] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm border border-gray-100"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4B5563] hover:bg-[#1b2316] hover:text-white transition-all duration-300 shadow-sm border border-gray-100"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4B5563] hover:bg-[#1b2316] hover:text-white transition-all duration-300 shadow-sm border border-gray-100"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#111827] font-black text-sm mb-8 flex items-center gap-3 uppercase tracking-widest leading-none">
              <span className="w-2 h-2 rounded-full bg-[#1b2316]"></span>
              Shop
            </h4>
            <ul className="flex flex-col gap-5 text-[#1b2316] font-bold text-sm">
              <li>
                <Link
                  to="/vegetables"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  to="/beverages"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Beverages
                </Link>
              </li>
              <li>
                <Link
                  to="/meat"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Meats
                </Link>
              </li>
              <li>
                <Link
                  to="/frozen"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Frozen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#111827] font-black text-sm mb-8 flex items-center gap-3 uppercase tracking-widest leading-none">
              <span className="w-2 h-2 rounded-full bg-[#1b2316]"></span>
              Support
            </h4>
            <ul className="flex flex-col gap-5 text-[#1b2316] font-bold text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37] hover:underline transition-all duration-300"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#111827] font-black text-sm mb-8 flex items-center gap-3 uppercase tracking-widest leading-none">
              <span className="w-2 h-2 rounded-full bg-[#1b2316]"></span>
              Contact
            </h4>
            <ul className="flex flex-col gap-6 text-[#4B5563] font-bold text-xs uppercase tracking-wider">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#1b2316] shrink-0" />
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-[#1b2316] shrink-0" />
                <span>+1 555 123</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-[#1b2316] shrink-0" />
                <span>support@smart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-12 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#1b2316]">ShopSmart</span> Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#9CA3AF]">
            <Link to="/" className="hover:text-[#1b2316] transition-colors">
              Terms
            </Link>
            <Link
              to="/privacy"
              className="hover:text-[#1b2316] transition-colors"
            >
              Privacy
            </Link>
            <Link to="/" className="hover:text-[#1b2316] transition-colors">
              Cookies
            </Link>
          </div>
          <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="w-10 h-6 bg-gray-100 rounded-md border border-gray-200"></div>
            <div className="w-10 h-6 bg-gray-100 rounded-md border border-gray-200"></div>
            <div className="w-10 h-6 bg-gray-100 rounded-md border border-gray-200"></div>
            <div className="w-10 h-6 bg-gray-100 rounded-md border border-gray-200"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
