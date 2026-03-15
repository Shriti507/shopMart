import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, Facebook, Twitter, Instagram, 
  Linkedin, Mail, Phone, MapPin, ExternalLink,
  ShieldCheck, Truck, RotateCcw, CreditCard
} from 'lucide-react';

const DashboardFooter = () => {
  return (
    <footer className="w-full bg-[#1b2316] text-gray-400 font-sans border-t border-white/5 pt-16">
      <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
        
       
        <div className="relative rounded-3xl overflow-hidden mb-16 group">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
              alt="Newsletter Background" 
              className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b2316] via-[#1b2316]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Stay ahead with <span className="text-[#dac889]">Fresh Updates</span></h3>
              <p className="text-gray-400 font-medium">Join 50,000+ happy shoppers and get exclusive deals delivered to your inbox weekly.</p>
            </div>
            
            <div className="w-full lg:w-max flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 min-w-[300px]">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-[#12170f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-[#dac889]/50 transition-all font-medium"
                />
              </div>
              <button className="bg-[#dac889] hover:bg-[#cbb671] text-[#1b2316] font-extrabold px-8 py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(218,200,137,0.25)] hover:shadow-[0_8px_25px_rgba(218,200,137,0.4)] whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-white/5">
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-[#212b1b] flex items-center justify-center text-[#dac889] group-hover:bg-[#dac889] group-hover:text-[#1b2316] transition-all duration-300 shadow-lg">
              <Truck size={28} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg leading-tight">Fast Delivery</h4>
              <p className="text-sm mt-1">Free for orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-[#212b1b] flex items-center justify-center text-[#dac889] group-hover:bg-[#dac889] group-hover:text-[#1b2316] transition-all duration-300 shadow-lg">
              <RotateCcw size={28} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg leading-tight">Easy Returns</h4>
              <p className="text-sm mt-1">30 days money back policy</p>
            </div>
          </div>
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-[#212b1b] flex items-center justify-center text-[#dac889] group-hover:bg-[#dac889] group-hover:text-[#1b2316] transition-all duration-300 shadow-lg">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg leading-tight">Secure Payment</h4>
              <p className="text-sm mt-1">100% secure payment methods</p>
            </div>
          </div>
          <div className="flex items-center gap-5 group">
            <div className="w-14 h-14 rounded-2xl bg-[#212b1b] flex items-center justify-center text-[#dac889] group-hover:bg-[#dac889] group-hover:text-[#1b2316] transition-all duration-300 shadow-lg">
              <CreditCard size={28} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg leading-tight">Member Deals</h4>
              <p className="text-sm mt-1">Exclusive discounts for VIPs</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#dac889] to-[#c3ae6d] rounded-xl flex items-center justify-center shadow-lg">
                 <ShoppingCart size={20} className="text-[#1b2316]" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Shop<span className="text-[#dac889]">Smart</span>
              </span>
            </Link>
            <p className="max-w-md text-gray-400 font-medium leading-relaxed mb-8">
              Experience the future of grocery shopping. Premium quality, farm-fresh produce delivered with lightning speed right to your kitchen.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-[#212b1b] flex items-center justify-center hover:bg-[#dac889] hover:text-[#1b2316] transition-all duration-300 border border-white/5 hover:border-transparent">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-[#212b1b] flex items-center justify-center hover:bg-[#4267B2] text-white transition-all duration-300 border border-white/5 hover:border-transparent">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-[#212b1b] flex items-center justify-center hover:bg-[#1DA1F2] text-white transition-all duration-300 border border-white/5 hover:border-transparent">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-[#212b1b] flex items-center justify-center hover:bg-[#0077b5] text-white transition-all duration-300 border border-white/5 hover:border-transparent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dac889]"></span>
              Quick Shop
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/vegetables" className="hover:text-[#dac889] transition-colors flex items-center gap-1 group">Vegetables & Fruit <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/beverages" className="hover:text-[#dac889] transition-colors">Beverages</Link></li>
              <li><Link to="/meat" className="hover:text-[#dac889] transition-colors">Meats & Seafood</Link></li>
              <li><Link to="/frozen" className="hover:text-[#dac889] transition-colors">Frozen Foods</Link></li>
              <li><Link to="/dairy" className="hover:text-[#dac889] transition-colors">Milk & Dairies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dac889]"></span>
              Support
            </h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="hover:text-[#dac889] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#dac889] transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-[#dac889] transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-[#dac889] transition-colors">Payment Methods</a></li>
              <li><a href="#" className="hover:text-[#dac889] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dac889]"></span>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#dac889] shrink-0" />
                <span className="text-sm">2585 Fresh Market St, <br/>San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#dac889] shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#dac889] shrink-0" />
                <span className="text-sm">support@shopsmart.com</span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-white font-bold">ShopSmart</span> Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <div className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <div className="w-10 h-6 bg-[#212b1b] rounded-md border border-white/5"></div>
             <div className="w-10 h-6 bg-[#212b1b] rounded-md border border-white/5"></div>
             <div className="w-10 h-6 bg-[#212b1b] rounded-md border border-white/5"></div>
             <div className="w-10 h-6 bg-[#212b1b] rounded-md border border-white/5"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
