import React from "react";
import {
  ShoppingCart,
  LayoutGrid,
  Heart,
  Star,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Fresh Vegetables",
      image:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80",
      count: "120+ Items",
    },
    {
      title: "Organic Fruits",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800",
      count: "85+ Items",
    },
    {
      title: "Dairy & Eggs",
      image:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800",
      count: "60+ Items",
    },
    {
      title: "Bakery & Bread",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
      count: "45+ Items",
    },
    {
      title: "Meat & Poultry",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=800",
      count: "75+ Items",
    },
    {
      title: "Beverages",
      image:
       "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80",
      count: "110+ Items",
    },
  ];

  return (
    <div className="w-full bg-[#1b2316] flex-grow text-gray-100 font-sans selection:bg-[#D4AF37] selection:text-[#1b2316]">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#2a3622] rounded-full opacity-20 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
              Shop by <span className="text-[#D4AF37]">Category</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Explore our wide selection of premium groceries, carefully curated
              for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#171e13] border border-white/5 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2316] via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-8 relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest">
                      {category.count}
                    </p>
                  </div>
                  <button className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-[#1b2316] shadow-xl hover:scale-110 transition-transform">
                    <ChevronRight size={24} strokeWidth={3} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
