import React from "react";
import { Target, Eye, Award, Users, ShieldCheck, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="w-full bg-[#1b2316] flex-grow text-gray-100 font-sans selection:bg-[#dac889] selection:text-[#1b2316]">
      <section className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#2a3622] rounded-full opacity-20 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              WE ARE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dac889] to-[#e8daa5]">
                SHOPSMART
              </span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl mx-auto italic">
              "Transforming the way you shop for groceries by combining
              state-of-the-art technology with farm-fresh quality."
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#171e13]/50">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#1b2316] p-10 rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#dac889]/10 hover:shadow-2xl">
              <div className="w-14 h-14 bg-[#2a3622] rounded-xl flex items-center justify-center mb-8 border border-white/5 text-[#dac889]">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                To make premium, healthy groceries accessible through a seamless
                digital experience while supporting local sustainable farming.
              </p>
            </div>

            <div className="bg-[#1b2316] p-10 rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#dac889]/10 hover:shadow-2xl">
              <div className="w-14 h-14 bg-[#2a3622] rounded-xl flex items-center justify-center mb-8 border border-white/5 text-[#dac889]">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
                Our Vision
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                To be the most trusted and innovative grocery platform,
                pioneering personalized nutrition for every household.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Our Core <span className="text-[#dac889]">Values</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-medium">
              The principles that guide our choices and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Award className="text-[#dac889]" />,
                title: "Quality First",
                desc: "Premium produce from farm to fork.",
              },
              {
                icon: <Users className="text-[#dac889]" />,
                title: "Customer Centric",
                desc: "Growing with our community.",
              },
              {
                icon: <ShieldCheck className="text-[#dac889]" />,
                title: "Integrity",
                desc: "Transparent and honest practices.",
              },
              {
                icon: <Heart className="text-[#dac889]" />,
                title: "Health Driven",
                desc: "Nutritious food for all.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#1a2115] p-8 rounded-2xl border border-white/5 hover:bg-[#2a3622]/30 transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 gap-6 p-8 bg-[#171e13]/30 rounded-2xl border border-white/5 italic text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dac889]"></span>{" "}
              Smart logistics & efficiency
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dac889]"></span>{" "}
              Eco-friendly packaging
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dac889]"></span>{" "}
              Supporting local farmers
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dac889]"></span>{" "}
              Sustainable supply chain
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
