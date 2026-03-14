import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="bg-[#1b2316] w-full text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        
       
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white hover:text-[#dac889] transition-colors">
            ShopSmart
          </span>
        </Link>

   
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-white border-b-2 border-white pb-1">Home</Link>
          <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
          <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/cart" 
            className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ShoppingCart size={18} className="text-white" />
          </Link>
          
          <Link 
            to="/login" 
            className="px-6 py-2 border border-white/40 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}