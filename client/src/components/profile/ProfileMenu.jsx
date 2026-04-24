import React from "react";
import {
  MapPin,
  ShoppingBag,
  Pill,
  Gift,
  ShieldCheck,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Data-Driven Config Array
  const menuConfig = [
    { label: "My Addresses", icon: MapPin, route: "/profile/addresses" },
    { label: "My Orders", icon: ShoppingBag, route: "/profile/orders" },
    { label: "My Prescriptions", icon: Pill, route: "/profile/prescriptions" },
    { label: "E-Gift Cards", icon: Gift, route: "/profile/gift-cards" },
    { label: "Account Privacy", icon: ShieldCheck, route: "/profile/privacy" },
    { label: "Logout", icon: LogOut, action: "logout" },
  ];

  const handleAction = (item) => {
    if (item.action === "logout") {
      logout();
      navigate("/login");
    } else if (item.route) {
      navigate(item.route);
    }
  };

  const mainItems = menuConfig.filter((item) => item.action !== "logout");
  const logoutItem = menuConfig.find((item) => item.action === "logout");

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="w-full bg-white rounded-[20px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 overflow-hidden">
        <div className="flex flex-col">
          {mainItems.map((item, index) => {
            const isLast = index === mainItems.length - 1;

            return (
              <button
                key={item.label}
                onClick={() => handleAction(item)}
                className={`w-full flex items-center justify-between p-4 px-5 transition-colors bg-white hover:bg-gray-50 active:bg-gray-100 group ${
                  !isLast ? "border-b border-gray-100/60" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-white transition-colors border border-gray-100 text-gray-600 group-hover:shadow-sm">
                    <item.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[15px] font-semibold text-gray-800 tracking-tight">
                    {item.label}
                  </span>
                </div>

                <ChevronRight
                  size={18}
                  className="text-gray-300 group-hover:text-gray-500 transition-colors group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </button>
            );
          })}
        </div>
      </div>

      {logoutItem && (
        <div className="w-full bg-white rounded-[20px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 overflow-hidden">
          <button
            onClick={() => handleAction(logoutItem)}
            className="w-full flex items-center justify-between p-4 px-5 transition-colors bg-white hover:bg-red-50/50 active:bg-red-50 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 group-hover:bg-red-100 transition-colors border border-red-100 text-red-500">
                <logoutItem.icon size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-bold text-red-600 tracking-tight">
                {logoutItem.label}
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
