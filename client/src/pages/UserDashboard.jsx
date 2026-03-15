import React from 'react';
import Navigation from '../components/Navigation';
import DashboardFooter from '../components/dashboard/DashboardFooter';
import { 
  Menu, Search, ChevronDown, 
  Carrot, Coffee, Beef, Snowflake, 
  Croissant, Dog, Milk, Plus
} from 'lucide-react';

const UserDashboard = () => {
  return (
    <div className="w-full bg-[#1b2316] min-h-screen text-gray-100 font-sans pb-16 flex flex-col selection:bg-[#dac889] selection:text-[#1b2316]">
      
      <div className="border-b border-white/5 bg-[#1b2316]/80 backdrop-blur-xl sticky top-0 z-50">
        <Navigation />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-8 xl:px-12 flex-1 flex flex-col pt-4">
        
        <div className="flex flex-col md:flex-row items-center gap-6 py-6 mb-4">
          <button className="bg-gradient-to-b from-[#34442a] to-[#2a3622] hover:from-[#3e5033] hover:to-[#34442a] text-white px-6 py-3.5 rounded-xl flex items-center justify-between min-w-[240px] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group">
            <div className="flex items-center gap-3 font-semibold tracking-wide text-sm">
              <Menu size={20} className="text-[#dac889] group-hover:scale-110 transition-transform duration-300" />
              ALL CATEGORIES
            </div>
            <ChevronDown size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          </button>
          
          <div className="flex-1 flex items-center bg-[#171e13] rounded-xl border border-white/10 overflow-hidden focus-within:border-[#dac889]/50 focus-within:ring-2 focus-within:ring-[#dac889]/10 transition-all shadow-inner h-[52px]">
            <button className="flex items-center gap-2 border-r border-white/10 px-5 h-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm w-40 justify-between">
              <span>All Categories</span>
              <ChevronDown size={16} />
            </button>
            <input 
              type="text" 
              placeholder="Search for amazing products..." 
              className="bg-transparent text-white px-5 h-full w-full outline-none placeholder-gray-500 font-medium" 
            />
            <button className="bg-[#dac889] hover:bg-[#cbb671] text-[#1b2316] h-full px-8 flex items-center gap-2 font-bold tracking-wide transition-colors">
              Search <Search size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        
        <div className="flex flex-col lg:flex-row gap-6 mb-14 h-auto lg:h-[460px]">
          
          
          <div className="lg:w-[65%] rounded-2xl relative overflow-hidden flex items-center border border-white/5 shadow-2xl group cursor-pointer bg-[#1b2316]">
            
            <div className="absolute right-0 bottom-0 h-full w-[60%] transition-transform duration-700 group-hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                alt="Fresh Delivery" 
                className="w-full h-full object-cover object-left opacity-90"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }}
              />
            </div>
            
            
            <div className="absolute inset-0 bg-gradient-to-r from-[#171e13] via-[#171e13]/95 to-transparent z-10 w-3/4"></div>
            
            <div className="relative z-20 p-12 lg:p-14 max-w-xl flex flex-col h-full justify-center">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#dac889] text-xs font-bold tracking-[0.2em] uppercase">Exclusive offer</span>
                <span className="bg-gradient-to-r from-[#af3a3a] to-[#c94545] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(175,58,58,0.4)]">
                  25% OFF
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                FRESH FOOD, <br/>
                FAIR PRICES, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dac889] to-[#e8daa5]">
                  FAST DELIVERY
                </span>
              </h1>
              
              <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm font-medium">
                Fresh veggies full of vitamins for your health. Premium quality produce delivered right to your doorstep.
              </p>
              
              <button className="bg-gradient-to-r from-[#af3a3a] to-[#c94545] hover:from-[#902f2f] hover:to-[#af3a3a] text-white w-max px-8 py-4 rounded-xl text-sm font-bold tracking-widest flex items-center gap-3 transition-all duration-300 shadow-[0_8px_20px_rgba(175,58,58,0.3)] hover:shadow-[0_8px_25px_rgba(175,58,58,0.5)] hover:-translate-y-1 uppercase group-hover:gap-5">
                Shop Collection <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </div>

          
          <div className="lg:w-[35%] flex flex-col gap-6 h-full">
            
            
            <div className="flex-1 rounded-2xl bg-[#212b1b] relative overflow-hidden border border-white/5 shadow-xl group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute right-0 top-0 w-[65%] h-full overflow-hidden transition-transform duration-700 group-hover:scale-110">
                <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600" alt="Healthy Food" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#212b1b] via-[#212b1b]/90 to-transparent z-10"></div>
              
              <div className="relative z-20 p-8 flex flex-col justify-center h-full max-w-[75%]">
                <h3 className="text-[#dac889] text-xl font-extrabold mb-1 tracking-tight">Healthy Food</h3>
                <h4 className="text-white text-base font-semibold mb-3">Organic Market</h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium">Start your daily shopping with our premium organic selection.</p>
                <button className="text-white text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#dac889] transition-colors w-max">
                  Shop Now <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </div>
            </div>

            
            <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#1a2115] to-[#12170f] relative overflow-hidden border border-white/5 shadow-xl group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute right-0 top-0 w-[65%] h-full overflow-hidden transition-transform duration-700 group-hover:scale-110">
                <img src="https://images.unsplash.com/photo-1599553648674-84dccc5e4aa2?auto=format&fit=crop&q=80&w=600" alt="Nuts" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a2115] via-[#1a2115]/80 to-transparent z-10 w-full"></div>
              
              <div className="relative z-20 p-8 flex flex-col justify-center h-full max-w-[70%]">
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-[#af3a3a] text-[28px] font-black tracking-tighter leading-none">25%</span>
                  <span className="text-white text-sm font-bold tracking-wide">OFF</span>
                </div>
                <h3 className="text-[#dac889] text-lg font-bold mb-3 tracking-tight">Nut Collection</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed mb-6 font-medium">Freshly roasted organic mixed nuts & dried fruits.</p>
                <button className="text-white text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#dac889] transition-colors w-max">
                  Shop Now <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 mb-16">
          
          <div className="bg-[#dac889] text-[#1b2316] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(218,200,137,0.3)] hover:shadow-[0_15px_35px_rgba(218,200,137,0.4)] group">
            <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
              <Carrot size={28} strokeWidth={2} />
            </div>
            <span className="font-extrabold text-[13px] text-center tracking-wide">Vegetables <br/>& Fruit</span>
          </div>
          
          <div className="bg-[#212b1b] hover:bg-[#2a3622] text-gray-400 hover:text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:-translate-y-1.5 border border-white/5 hover:border-white/20 shadow-lg group">
            <div className="bg-[#171e13] p-3 rounded-full border border-white/5 group-hover:border-[#dac889]/30 transition-colors shadow-inner">
               <Coffee size={28} strokeWidth={1.5} className="text-[#dac889] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-[13px] text-center tracking-wide">Beverages</span>
          </div>
          
          <div className="bg-[#212b1b] hover:bg-[#2a3622] text-gray-400 hover:text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:-translate-y-1.5 border border-white/5 hover:border-white/20 shadow-lg group">
            <div className="bg-[#171e13] p-3 rounded-full border border-white/5 group-hover:border-[#dac889]/30 transition-colors shadow-inner">
               <Beef size={28} strokeWidth={1.5} className="text-[#dac889] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-[13px] text-center tracking-wide">Meats & <br/>Seafood</span>
          </div>

          <div className="bg-[#212b1b] hover:bg-[#2a3622] text-gray-400 hover:text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:-translate-y-1.5 border border-white/5 hover:border-white/20 shadow-lg group">
             <div className="bg-[#171e13] p-3 rounded-full border border-white/5 group-hover:border-[#dac889]/30 transition-colors shadow-inner">
               <Snowflake size={28} strokeWidth={1.5} className="text-[#dac889] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-[13px] text-center tracking-wide">Frozen <br/>Foods</span>
          </div>

          <div className="bg-[#212b1b] hover:bg-[#2a3622] text-gray-400 hover:text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:-translate-y-1.5 border border-white/5 hover:border-white/20 shadow-lg group">
             <div className="bg-[#171e13] p-3 rounded-full border border-white/5 group-hover:border-[#dac889]/30 transition-colors shadow-inner">
               <Croissant size={28} strokeWidth={1.5} className="text-[#dac889] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-[13px] text-center tracking-wide">Morning <br/>Breakfast</span>
          </div>

          <div className="bg-[#212b1b] hover:bg-[#2a3622] text-gray-400 hover:text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:-translate-y-1.5 border border-white/5 hover:border-white/20 shadow-lg group">
             <div className="bg-[#171e13] p-3 rounded-full border border-white/5 group-hover:border-[#dac889]/30 transition-colors shadow-inner">
               <Dog size={28} strokeWidth={1.5} className="text-[#dac889] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-[13px] text-center tracking-wide">Animal & <br/>Pet Food</span>
          </div>

          <div className="bg-[#212b1b] hover:bg-[#2a3622] text-gray-400 hover:text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:-translate-y-1.5 border border-white/5 hover:border-white/20 shadow-lg group">
             <div className="bg-[#171e13] p-3 rounded-full border border-white/5 group-hover:border-[#dac889]/30 transition-colors shadow-inner">
               <Milk size={28} strokeWidth={1.5} className="text-[#dac889] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-bold text-[13px] text-center tracking-wide">Milk & <br/>Dairies</span>
          </div>

        </div>

        
        <div className="flex flex-col lg:flex-row gap-10">
          
          
          <div className="lg:w-[22%]">
            <h3 className="text-xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-2">
              Explore 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dac889] to-[#e8daa5]">Categories</span>
            </h3>
            
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-4 px-5 py-4 bg-[#212b1b] text-[#dac889] font-bold rounded-xl cursor-pointer shadow-md relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#dac889] rounded-l-xl"></div>
                <div className="bg-white/5 p-2 rounded-lg text-[#dac889]">
                  <Carrot size={18} />
                </div>
                Vegetables & Fruit
              </li>
              
              <li className="flex items-center gap-4 px-5 py-3 text-gray-400 font-medium hover:text-white hover:bg-white/5 rounded-xl cursor-pointer transition-all group">
                <div className="bg-[#171e13] p-2 rounded-lg text-gray-500 group-hover:text-white transition-colors border border-white/5">
                  <Beef size={18} />
                </div>
                Meats & Seafood
              </li>
              
              <li className="flex items-center gap-4 px-5 py-3 text-gray-400 font-medium hover:text-white hover:bg-white/5 rounded-xl cursor-pointer transition-all group">
                <div className="bg-[#171e13] p-2 rounded-lg text-gray-500 group-hover:text-white transition-colors border border-white/5">
                  <Coffee size={18} />
                </div>
                Beverages
              </li>
              
              <li className="flex items-center gap-4 px-5 py-3 text-gray-400 font-medium hover:text-white hover:bg-white/5 rounded-xl cursor-pointer transition-all group">
                <div className="bg-[#171e13] p-2 rounded-lg text-gray-500 group-hover:text-white transition-colors border border-white/5">
                  <Snowflake size={18} />
                </div>
                Frozen Foods
              </li>
              
              <li className="flex items-center gap-4 px-5 py-3 text-gray-400 font-medium hover:text-white hover:bg-white/5 rounded-xl cursor-pointer transition-all group mt-2">
                <span className="text-sm font-bold text-[#dac889] w-full text-center tracking-wide border border-white/10 rounded-lg py-2 hover:bg-white/5 transition-colors">
                  View All Navigation &rarr;
                </span>
              </li>
            </ul>
          </div>

          
          <div className="lg:w-[78%]">
            
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/10 pb-5 mb-8 gap-4">
              <div>
                <h3 className="text-[26px] font-extrabold text-white tracking-tight leading-none mb-2">Top Save Today</h3>
                <p className="text-gray-400 text-sm font-medium">Limited-Time Bulk Pricing on Organic Produce</p>
              </div>
              <div className="bg-gradient-to-r from-[#af3a3a] to-[#c94545] text-white px-5 py-2.5 rounded-xl flex items-center gap-3 font-mono text-sm tracking-widest shadow-[0_4px_20px_rgba(175,58,58,0.3)] border border-[#e85a5a]/30">
                <span className="opacity-90 text-[11px] font-sans tracking-wide uppercase font-bold">Ends in:</span>
                <span className="text-base font-bold bg-black/20 px-2 py-0.5 rounded">14 : 23 : 59 : 55</span>
              </div>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              
              <div className="bg-[#212b1b] rounded-2xl p-5 border border-white/5 hover:border-[#dac889]/40 transition-all duration-300 group cursor-pointer flex flex-col shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative">
                <div className="bg-white rounded-xl p-5 mb-5 flex-1 flex items-center justify-center overflow-hidden shadow-inner aspect-[4/3] border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&q=80&w=300" alt="Product" className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-[11px] font-bold text-[#dac889] uppercase tracking-wider mb-2">Vegetables</div>
                  <h4 className="text-white font-bold text-[15px] mb-4 leading-snug group-hover:text-gray-200 transition-colors">Organic Premium Oranges Handpicked</h4>
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-gray-500 text-xs font-bold line-through ml-0.5">$5.99</span>
                      <div className="text-[#dac889] font-black text-2xl tracking-tight leading-none">$3.99</div>
                    </div>
                    <button className="bg-[#34442a] text-white hover:bg-[#dac889] hover:text-[#1b2316] p-2 rounded-lg transition-colors border border-white/10 group-hover:border-transparent">
                       <Plus size={20} className="stroke-[3px]"/>
                    </button>
                  </div>
                </div>
              </div>

              
              <div className="bg-[#212b1b] rounded-2xl p-5 border border-white/5 hover:border-[#dac889]/40 transition-all duration-300 group cursor-pointer flex flex-col shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#dac889] to-[#cbb671] text-[#1b2316] text-[10px] font-black tracking-widest px-2.5 py-1 rounded shadow-md z-10 uppercase">
                  NEW ARRIVAL
                </div>
                <div className="bg-white rounded-xl p-5 mb-5 flex-1 flex items-center justify-center overflow-hidden shadow-inner aspect-[4/3] border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300" alt="Milk" className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-[11px] font-bold text-[#dac889] uppercase tracking-wider mb-2">Dairy</div>
                  <h4 className="text-white font-bold text-[15px] mb-4 leading-snug group-hover:text-gray-200 transition-colors">Fresh Whole Milk 1 Gallon Organic</h4>
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <div className="h-4"></div> 
                      <div className="text-[#dac889] font-black text-2xl tracking-tight leading-none">$4.50</div>
                    </div>
                    <button className="bg-[#34442a] text-white hover:bg-[#dac889] hover:text-[#1b2316] p-2 rounded-lg transition-colors border border-white/10 group-hover:border-transparent">
                       <Plus size={20} className="stroke-[3px]"/>
                    </button>
                  </div>
                </div>
              </div>

              
              <div className="bg-[#212b1b] rounded-2xl p-5 border border-white/5 hover:border-[#dac889]/40 transition-all duration-300 group cursor-pointer flex flex-col shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative">
                <div className="bg-white rounded-xl p-5 mb-5 flex-1 flex items-center justify-center overflow-hidden shadow-inner aspect-[4/3] border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1607532941433-304655e8fac8?auto=format&fit=crop&q=80&w=300" alt="Chips" className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-[11px] font-bold text-[#dac889] uppercase tracking-wider mb-2">Snacks</div>
                  <h4 className="text-white font-bold text-[15px] mb-4 leading-snug group-hover:text-gray-200 transition-colors">Spicy Potato Chips Family Size Pack</h4>
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-gray-500 text-xs font-bold line-through ml-0.5">$3.50</span>
                      <div className="text-[#dac889] font-black text-2xl tracking-tight leading-none">$2.49</div>
                    </div>
                    <button className="bg-[#34442a] text-white hover:bg-[#dac889] hover:text-[#1b2316] p-2 rounded-lg transition-colors border border-white/10 group-hover:border-transparent">
                       <Plus size={20} className="stroke-[3px]"/>
                    </button>
                  </div>
                </div>
              </div>

              
              <div className="bg-[#212b1b] rounded-2xl p-5 border border-white/5 hover:border-[#dac889]/40 transition-all duration-300 group cursor-pointer flex flex-col shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-[#af3a3a] text-white text-[10px] font-black tracking-widest px-2 py-1 rounded shadow-md z-10 w-max transform rotate-12 translate-x-2 -translate-y-1">
                  -25%
                </div>
                <div className="bg-white rounded-xl p-5 mb-5 flex-1 flex items-center justify-center overflow-hidden shadow-inner aspect-[4/3] border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=300" alt="Meat" className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-[11px] font-bold text-[#dac889] uppercase tracking-wider mb-2">Meats</div>
                  <h4 className="text-white font-bold text-[15px] mb-4 leading-snug group-hover:text-gray-200 transition-colors">Premium Fresh Ribeye Steak Cut</h4>
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-gray-500 text-xs font-bold line-through ml-0.5">$19.99</span>
                      <div className="text-[#dac889] font-black text-2xl tracking-tight leading-none">$14.99</div>
                    </div>
                    <button className="bg-[#34442a] text-white hover:bg-[#dac889] hover:text-[#1b2316] p-2 rounded-lg transition-colors border border-white/10 group-hover:border-transparent">
                       <Plus size={20} className="stroke-[3px]"/>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <DashboardFooter />
    </div>
  );
};

export default UserDashboard;
