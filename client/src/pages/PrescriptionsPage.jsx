import React from "react";
import { ChevronLeft, Pill, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrescriptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] font-sans">
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-[#1a1a1a]" />
          </button>
          <h1 className="text-xl font-bold text-[#1a1a1a]">My Prescriptions</h1>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 mt-20 text-center">
        <div className="w-24 h-24 bg-[#1f2d1f]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1f2d1f]">
          <Pill size={48} />
        </div>
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-3">No prescriptions uploaded yet</h2>
        <p className="text-[#6b7280] max-w-[350px] mx-auto mb-8 leading-relaxed font-medium">
          Upload your doctor's prescriptions to easily order medicines and health products.
        </p>
        <button className="bg-[#1f2d1f] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 mx-auto hover:opacity-90 shadow-sm transition-all active:scale-95">
          <Upload size={20} />
          <span>Upload Prescription</span>
        </button>
      </div>
    </div>
  );
};

export default PrescriptionsPage;
