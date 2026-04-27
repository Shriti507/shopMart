import React from "react";
import { Truck, MapPin, ChevronDown, Star, Apple, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#1b2316] text-white overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[#2a3622] rounded-full opacity-50 -translate-y-1/4"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Truck size={18} className="text-gray-300" />
            <span className="text-sm text-gray-200">
              Grocery Delivery Service
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Get fresh <span className="text-white">Grocery</span>
            <br />
            <span className="text-gray-200 font-normal">
              Enjoy healthy life.
            </span>
          </h1>

          <div className="w-full max-w-md flex flex-col sm:flex-row items-center bg-[#2c3725]/80 backdrop-blur-md rounded-full mb-4 border border-white/10 p-1">
            <div className="flex-1 flex items-center justify-between px-6 py-2 w-full sm:w-auto overflow-hidden">
              <span className="text-gray-300 text-sm whitespace-nowrap">
                Select Category
              </span>
              <ChevronDown size={18} className="text-gray-400 shrink-0" />
            </div>
            <button className="w-full sm:w-auto bg-[#dac889] text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-[#c9b775] transition-colors whitespace-nowrap">
              Shop Now
            </button>
          </div>

          <p className="text-gray-400 text-sm mb-12 pl-2">
            Not yet Member?{" "}
            <Link to="/signUp" className="text-[#dac889] hover:underline">
              Sign Up
            </Link>{" "}
            Now
          </p>

          <div className="flex flex-col xl:flex-row gap-8 items-start xl:items-center w-full mt-4">
            <div className="flex items-center gap-5 bg-[#252f1e]/80 backdrop-blur-md border border-white/5 px-6 py-5 rounded-2xl shadow-xl w-fit shrink-0">
              <div className="flex -space-x-3 shrink-0">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  alt="Customer"
                  className="w-12 h-12 rounded-full border-2 border-[#252f1e]"
                />
                <img
                  src="https://i.pravatar.cc/100?img=3"
                  alt="Customer"
                  className="w-12 h-12 rounded-full border-2 border-[#252f1e]"
                />
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  alt="Customer"
                  className="w-12 h-12 rounded-full border-2 border-[#252f1e]"
                />
              </div>
              <div className="flex flex-col shrink-0 min-w-max">
                <div className="font-bold text-lg leading-tight mb-1 text-white">
                  Our Happy
                  <br />
                  Customer
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center font-bold text-base text-white">
                    <Star
                      size={16}
                      className="fill-[#dac889] text-[#dac889] mr-1"
                    />
                    4.4
                  </div>
                  <div className="text-gray-400 text-xs leading-tight">
                    (12.5k
                    <br />
                    Review)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col relative z-20">
              <span className="text-[15px] font-bold mb-3 text-white">
                Download App
              </span>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-[#131412] hover:bg-black text-white px-5 py-2.5 rounded-xl transition-all border border-white/10 shadow-lg min-w-[170px]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                    alt="Google Play"
                    className="w-7 h-7"
                  />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-300 tracking-wide font-medium">
                      GET IT ON
                    </span>
                    <span className="text-base font-semibold font-sans tracking-tight">
                      Google Play
                    </span>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 bg-[#131412] hover:bg-black text-white px-5 py-2.5 rounded-xl transition-all border border-white/10 shadow-lg min-w-[170px]">
                  <svg
                    viewBox="0 0 384 512"
                    width="28"
                    height="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-300 tracking-wide font-medium">
                      Download on the
                    </span>
                    <span className="text-base font-semibold font-sans tracking-tight">
                      App Store
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center mt-12 md:mt-0 z-10 hidden sm:flex">
          <div className="relative w-full max-w-[500px] aspect-[4/5] object-cover rounded-[40px] overflow-hidden lg:mr-[-10%] z-10 transition-transform hover:scale-[1.02] duration-500">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
              alt="Grocery Delivery"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1b2316] to-transparent opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
