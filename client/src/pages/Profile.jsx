import React from "react";
import ProfileMenu from "../components/profile/ProfileMenu";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="w-full min-h-screen bg-[#f6f6f6] py-10 px-4 md:py-12">
      <div className="max-w-[800px] md:max-w-[600px] mx-auto flex flex-col gap-5">
        <div className="flex items-center gap-4 bg-white p-5 md:p-6 rounded-[20px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-2xl border border-gray-200 shadow-sm overflow-hidden shrink-0">
            <img
              src={`https://ui-avatars.com/api/?name=${user?.name || "User"}&background=random&color=fff&size=128`}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight leading-tight">
              {user?.name || "Guest User"}
            </h1>
            <p className="text-gray-500 font-medium text-sm mt-0.5">
              {user?.phoneNumber || "+91 00000 00000"}
            </p>
          </div>
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Profile;
