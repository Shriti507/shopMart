import { Search,ShoppingCart, CircleUserRound,PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';



export default function Navigation() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center gap-8">
        
        {/* logo */}
        <Link to="/home" className="text-4xl font-black tracking-tight">
          <span className="text-[#831616]">Shop</span>
          <span className="text-[#dac889]">Smart</span>
        </Link>

        {/* search bar */}
        <div className="grow max-w-2xl flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-50 focus-within:border-purple-600 transition-colors">
          
          <input 
            type="text" 
            placeholder="Type Your Products ..." 
            className="w-full px-4 py-3 bg-transparent outline-none text-gray-700"
          />
          <button className="bg-[#45462A] text-white px-8 py-3 font-semibold hover:bg-[#606235] transition-colors">
            <div className="flex items-center gap-2 pl-4 text-gray-200">
                <Search size={20} />
                <span>Search</span>
            </div>
          </button>
        </div>

        <div>
            <Link 
                to="/login" 
                className="flex items-center gap-2 font-medium hover:text-[#45462A] transition cursor-pointer"
                >
            <CircleUserRound size={22}/>
            <span>Login</span>
            </Link>
        </div>



        <div>
            <Link 
                to="/cart" 
                className="flex items-center gap-2 font-medium hover:text-[#45462A] transition cursor-pointer"
                >
            <ShoppingCart size={22}/>
            <span>Cart</span>
            </Link>
        </div>



        

     </div>
          
        

        
    

      
        

     

    </header>
  );
}