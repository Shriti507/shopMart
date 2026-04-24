import React from "react";

const EmptyState = ({ icon, title, subtext, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-[600px] mx-auto px-4 mt-20 text-center">
      <div className="w-24 h-24 bg-[#1f2d1f]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1f2d1f]">
        {icon}
      </div>
      <h2 className="text-2xl font-black text-[#1a1a1a] mb-3">{title}</h2>
      {subtext && (
        <p className="text-[#6b7280] max-w-[350px] mx-auto mb-8 leading-relaxed font-medium">
          {subtext}
        </p>
      )}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="bg-[#1f2d1f] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 mx-auto hover:opacity-90 shadow-sm transition-all active:scale-95"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
