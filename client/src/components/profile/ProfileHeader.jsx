import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ title, rightElement }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-10 px-4 py-4">
      <div className="max-w-[600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ChevronLeft size={24} className="text-[#1a1a1a]" />
          </button>
          <h1 className="text-xl font-bold text-[#1a1a1a]">{title}</h1>
        </div>
        {rightElement && <div>{rightElement}</div>}
      </div>
    </div>
  );
};

export default ProfileHeader;
