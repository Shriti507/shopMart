import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import {
  User,
  ChevronRight,
  MapPin,
  ShoppingBag,
  Pill,
  Gift,
  ShieldCheck,
  LogOut,
} from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "U";
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] font-sans">
      <div className="max-w-[600px] mx-auto px-4 py-8">
        {/* User Card */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#1f2d1f] flex items-center justify-center text-white font-bold text-2xl shrink-0">
            {getInitials(user?.name)}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-[#1a1a1a]">
              {user?.name || "Guest User"}
            </h1>
            <p className="text-[#6b7280] text-sm">
              {user?.phone || "No phone added"}
            </p>
          </div>
          <button
            onClick={() => navigate("/profile/edit")}
            className="bg-[#1f2d1f] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Edit Profile
          </button>
        </div>

        {/* Menu List */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="flex flex-col">
            <MenuRow
              icon={<MapPin size={20} />}
              title="My Addresses"
              subtitle="Save addresses for faster checkout"
              onClick={() => navigate("/profile/addresses")}
            />
            <MenuRow
              icon={<ShoppingBag size={20} />}
              title="My Orders"
              subtitle="Track your order status and history"
              onClick={() => navigate("/profile/orders")}
            />
            <MenuRow
              icon={<Pill size={20} />}
              title="My Prescriptions"
              subtitle="Upload and manage your medical records"
              onClick={() => navigate("/profile/prescriptions")}
            />
            <MenuRow
              icon={<Gift size={20} />}
              title="E-Gift Cards"
              subtitle="Gift vouchers and promotional credits"
              onClick={() => navigate("/profile/gift-cards")}
            />
            <MenuRow
              icon={<ShieldCheck size={20} />}
              title="Account Privacy"
              subtitle="Security, password, and data management"
              onClick={() => navigate("/profile/privacy")}
              isLast={true}
            />
          </div>
        </div>

        {/* Logout Section */}
        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-full flex items-center gap-4 p-5 hover:bg-red-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-100 transition-colors">
              <LogOut size={20} />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-red-600">Logout</h3>
              <p className="text-[#6b7280] text-xs font-medium">
                Sign out from your account
              </p>
            </div>
            <ChevronRight size={18} className="ml-auto text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuRow = ({ icon, title, subtitle, onClick, isLast }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors group ${!isLast ? "border-b border-gray-50" : ""}`}
  >
    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1f2d1f] group-hover:bg-white transition-colors border border-gray-100 shadow-sm">
      {icon}
    </div>
    <div className="text-left">
      <h3 className="font-bold text-[#1a1a1a]">{title}</h3>
      <p className="text-[#6b7280] text-xs font-medium">{subtitle}</p>
    </div>
    <ChevronRight
      size={18}
      className="ml-auto text-gray-300 group-hover:translate-x-1 transition-transform"
    />
  </button>
);

export default Profile;
