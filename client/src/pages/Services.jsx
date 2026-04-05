import React from "react";
import { Truck, ShieldCheck, Heart, Clock, Gift, Recycle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck size={32} className="text-[#D4AF37]" />,
      title: "Fast Delivery",
      description:
        "Get your groceries delivered within 90 minutes of placing your order. We prioritize speed without compromising quality.",
    },
    {
      icon: <ShieldCheck size={32} className="text-[#D4AF37]" />,
      title: "Quality Check",
      description:
        "Our dedicated quality control team inspects every single item before it leaves our premises.",
    },
    {
      icon: <Heart size={32} className="text-[#D4AF37]" />,
      title: "Freshness Guaranteed",
      description:
        "We source directly from local farms. If it's not fresh, we'll replace it for free.",
    },
    {
      icon: <Clock size={32} className="text-[#D4AF37]" />,
      title: "24/7 Support",
      description:
        "Our customer service team is available around the clock to help with your inquiries.",
    },
    {
      icon: <Gift size={32} className="text-[#D4AF37]" />,
      title: "Loyalty Rewards",
      description:
        "Earn points on every purchase and redeem them for exclusive discounts and free products.",
    },
    {
      icon: <Recycle size={32} className="text-[#D4AF37]" />,
      title: "Sustainable Packaging",
      description:
        "We use eco-friendly and biodegradable materials for all our packaging to protect our planet.",
    },
  ];

  return (
    <div className="w-full bg-[#1b2316] min-h-screen text-gray-100 font-sans selection:bg-[#D4AF37] selection:text-[#1b2316]">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#2a3622] rounded-full opacity-20 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
              Our <span className="text-[#D4AF37]">Services</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              We provide the most premium and reliable grocery delivery service,
              ensuring every detail is handled with care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#171e13] p-10 rounded-[28px] border border-white/5 transition-all duration-500 hover:border-[#D4AF37]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-[#2a3622] rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-colors duration-500 group-hover:bg-[#D4AF37] group-hover:text-[#1b2316]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
