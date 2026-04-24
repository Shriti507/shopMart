import React from "react";
import { ChevronLeft, Key, Database, Bell, Trash2, ChevronRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] font-sans pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-[#1a1a1a]" />
          </button>
          <h1 className="text-xl font-bold text-[#1a1a1a]">Account Privacy</h1>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 mt-8">
        <div className="bg-[#1f2d1f]/5 rounded-[24px] p-6 border border-[#1f2d1f]/10 mb-8 flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1f2d1f] shrink-0 shadow-sm border border-[#1f2d1f]/5">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 className="font-bold text-[#1a1a1a] mb-1">Your Data is Secure</h2>
            <p className="text-sm text-[#6b7280] leading-relaxed font-medium">
              ShopSmart uses industry-standard encryption to protect your information. Your privacy is our priority.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm">
          <PrivacyRow icon={<Key size={18} />} title="Change Password" />
          <PrivacyRow icon={<Database size={18} />} title="Manage Personal Data" />
          <PrivacyRow icon={<Bell size={18} />} title="Notification Preferences" />
          <PrivacyRow 
            icon={<Trash2 size={18} />} 
            title="Delete Account" 
            textColor="text-red-600" 
            isLast={true} 
          />
        </div>

        <p className="text-center text-xs font-bold text-[#6b7280] uppercase tracking-widest mt-8">
          We take your privacy and data security seriously
        </p>
      </div>
    </div>
  );
};

const PrivacyRow = ({ icon, title, textColor = "text-[#1a1a1a]", isLast }) => (
  <button className={`w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors group ${!isLast ? 'border-b border-gray-50' : ''}`}>
    <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${textColor === 'text-red-600' ? 'text-red-500 bg-red-50' : 'text-[#1f2d1f]'} border border-gray-100`}>
      {icon}
    </div>
    <span className={`font-bold ${textColor}`}>{title}</span>
    <ChevronRight size={18} className="ml-auto text-gray-300 group-hover:translate-x-1 transition-transform" />
  </button>
);

export default PrivacyPage;
