import React from 'react';
import { Carrot, Croissant, Apple, Beef, Milk, ArrowRight } from 'lucide-react';

const categories = [
  { id: 1, title: 'Vegetables', subtitle: 'Fresh & Organic', icon: Carrot, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { id: 2, title: 'Snacks & Breads', subtitle: 'Bakery fresh', icon: Croissant, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { id: 3, title: 'Fruits', subtitle: 'Daily harvest', icon: Apple, color: 'text-red-400', bg: 'bg-red-400/10' },
  { id: 4, title: 'Chicken', subtitle: 'Premium cut', icon: Beef, color: 'text-[#dac889]', bg: 'bg-[#dac889]/10' },
  { id: 5, title: 'Milk & Dairy', subtitle: 'Local farms', icon: Milk, color: 'text-blue-300', bg: 'bg-blue-300/10' }
];

const CategorySection = () => {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between mb-6">
         <h2 className="text-[22px] font-extrabold text-black tracking-tight">Shop by <span className="text-[#dac889]">Category</span></h2>
      </div>

      {/* Added hide-scrollbar utility class conceptually, but standard inline styles work too */}
      <div className="flex overflow-x-auto pb-6 -mx-6 px-6 xl:mx-0 xl:px-0 lg:grid lg:grid-cols-6 gap-4 [&::-webkit-scrollbar]:hidden" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {categories.map((cat) => (
          <div key={cat.id} className="min-w-[140px] flex-1 bg-[#212b1b] rounded-2xl p-5 border border-white/5 flex flex-col items-center justify-center gap-3 cursor-pointer group hover:-translate-y-2 hover:border-[#dac889]/30 transition-all duration-300 shadow-lg">
            <div className={`p-4 rounded-[20px] ${cat.bg} group-hover:scale-110 transition-transform duration-300 ease-out shadow-inner`}>
              <cat.icon size={32} className={`${cat.color}`} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-sm mb-1 group-hover:text-gray-100">{cat.title}</h3>
              <p className="text-gray-400 text-[11px] font-medium">{cat.subtitle}</p>
            </div>
          </div>
        ))}
        
        {/* See All Card */}
        <div className="min-w-[140px] flex-1 bg-gradient-to-br from-[#2a3622] to-[#1c2417] rounded-2xl p-5 border border-white/5 flex flex-col items-center justify-center gap-3 cursor-pointer group hover:-translate-y-2 hover:border-[#dac889]/30 transition-all duration-300 shadow-lg">
           <div className="p-4 rounded-[20px] bg-[#dac889]/10 group-hover:scale-110 group-hover:bg-[#dac889] transition-all duration-300 shadow-inner">
              <ArrowRight size={32} className="text-[#dac889] group-hover:text-[#1b2316]" strokeWidth={2} />
           </div>
           <div className="text-center">
              <h3 className="text-[#dac889] font-bold text-sm mb-1 group-hover:text-white transition-colors">See all</h3>
              <p className="text-gray-400 text-[11px] font-medium">Categories</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
