import React from "react";
import { ChevronRight } from "lucide-react";

const ProfileMenuItem = ({
  icon,
  title,
  subtitle,
  onClick,
  isLast,
  textColor = "text-[#1a1a1a]",
  iconBg = "bg-gray-50",
  iconColor = "text-[#1f2d1f]",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors group ${!isLast ? "border-b border-gray-50" : ""}`}
    >
      <div
        className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center ${iconColor} border border-gray-100 shadow-sm transition-colors group-hover:bg-white`}
      >
        {icon}
      </div>
      <div className="text-left flex-1">
        <h3 className={`font-bold ${textColor}`}>{title}</h3>
        {subtitle && (
          <p className="text-[#6b7280] text-xs font-medium">{subtitle}</p>
        )}
      </div>
      <ChevronRight
        size={18}
        className="text-gray-300 group-hover:translate-x-1 transition-transform"
      />
    </button>
  );
};

export default ProfileMenuItem;
