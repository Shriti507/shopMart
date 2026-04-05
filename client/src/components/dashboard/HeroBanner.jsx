import React from 'react';

const HeroBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-6 w-full">
      <div className="w-full bg-gradient-to-r from-[#212b1b] to-[#171e13] rounded-2xl px-10 py-12 border border-white/5 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[360px] group mb-8">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[60%] h-[150%] bg-gradient-to-tr from-[#dac889]/5 to-transparent rotate-12 blur-3xl"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 w-full md:w-[55%] flex flex-col items-start gap-5">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#dac889] text-[11px] font-bold tracking-[0.2em] uppercase mb-1 shadow-inner">
          100% Organic & Fresh
        </div>
        <h1 className="text-[40px] md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.05] tracking-tight">
          We bring the <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dac889] to-[#e8daa5]">
            store to your door
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-sm font-medium mt-1">
          Get fresh farm vegetables, quality meats, and everyday essentials delivered right to your doorstep in just 15 minutes.
        </p>
        <button className="bg-gradient-to-r from-[#af3a3a] to-[#c94545] hover:from-[#902f2f] hover:to-[#af3a3a] text-white px-8 py-4 rounded-xl text-[13px] font-bold tracking-widest flex items-center gap-3 transition-all duration-300 shadow-[0_8px_20px_rgba(175,58,58,0.3)] hover:shadow-[0_8px_25px_rgba(175,58,58,0.5)] hover:-translate-y-1 uppercase group-hover:gap-5 mt-4">
          Shop Now <span className="text-lg leading-none">&rarr;</span>
        </button>
      </div>

      {/* Right Content - Illustration / Image */}
      <div className="relative z-10 w-full md:w-[45%] flex justify-center md:justify-end mt-10 md:mt-0">
         <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
            alt="Grocery Delivery" 
            className="w-[90%] md:w-[85%] lg:w-[75%] object-cover rounded-2xl rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-out shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-4 border-white/5"
         />
      </div>
      </div>
    </div>
  );
};

export default HeroBanner;
