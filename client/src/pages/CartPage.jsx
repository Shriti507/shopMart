import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Trash2, 
  Minus, 
  Plus, 
  ArrowLeft, 
  ShoppingBag, 
  Loader2, 
  ChevronRight,
  ShieldCheck,
  Truck
} from "lucide-react";
import Header from "../components/dashboard/Header";
import * as shopApi from "../services/shopApi";
import { useAuth } from "../context/AuthContext";
import { formatUSD, calculatePrice } from "../utils/price";

const CartPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, refreshCartCount } = useAuth();
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError("");
      const data = await shopApi.getCart();
      setItems(data.items || []);
      setTotalPrice(data.totalPrice ?? 0);
    } catch (e) {
      setError(e.message || "Could not load cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    load();
  }, [isAuthenticated, navigate]);

  const updateQty = async (productId, quantity) => {
    try {
      // Optimistic update
      const oldItems = [...items];
      setItems(items.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      ));

      const data = await shopApi.updateCartItem(productId, quantity);
      setItems(data.items || []);
      setTotalPrice(data.totalPrice ?? 0);
      refreshCartCount();
    } catch (e) {
      setError(e.message || "Update failed");
      load(); // Rollback
    }
  };

  const remove = async (productId) => {
    try {
      const data = await shopApi.removeCartItem(productId);
      setItems(data.items || []);
      setTotalPrice(data.totalPrice ?? 0);
      refreshCartCount();
    } catch (e) {
      setError(e.message || "Remove failed");
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  const { subtotal, shipping, tax, total: finalTotal } = calculatePrice(items);

  return (
    <div className="w-full bg-gray-50 flex flex-col flex-grow">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6 md:py-10">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/user-dashboard" className="text-gray-500 hover:text-[#1b2316] transition-colors flex items-center gap-1 font-bold text-sm">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="flex-1">
            <h1 className="text-3xl font-black text-[#1b2316] mb-8 tracking-tight flex items-center gap-3">
              Your Cart 
              <span className="text-sm font-bold bg-[#dac889]/20 text-[#847949] px-3 py-1 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)} Items
              </span>
            </h1>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <Loader2 className="animate-spin text-[#dac889]" size={40} />
                <p className="mt-4 text-gray-500 font-bold tracking-wide">Loading your selections...</p>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag size={48} className="text-gray-300" />
                </div>
                <h2 className="text-2xl font-bold text-[#1b2316] mb-3">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 max-w-xs text-center">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/user-dashboard" className="bg-[#1b2316] text-white px-10 py-4 rounded-2xl font-black text-sm tracking-widest hover:opacity-90 transition-all shadow-lg hover:-translate-y-1 uppercase">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item.productId} className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 group hover:border-[#dac889]/30 transition-all">
                    
                    <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-50 flex items-center justify-center">
                      <img 
                        src={item.image || "https://placehold.co/400x400?text=Product"} 
                        alt={item.title} 
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                   
                    <div className="flex-1 flex flex-col gap-1 w-full text-center sm:text-left">
                      <h3 className="text-lg font-black text-[#1b2316] leading-snug">{item.title}</h3>
                      <p className="text-sm text-[#847949] font-bold">1 unit</p>
                      <div className="mt-3 flex items-center justify-center sm:justify-start gap-4">
                         <div className="flex items-center bg-gray-50 border border-gray-100 rounded-xl px-1">
                            <button 
                              onClick={() => updateQty(item.productId, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1b2316] transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-black text-sm text-[#1b2316]">{item.quantity}</span>
                            <button 
                              onClick={() => updateQty(item.productId, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1b2316] transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                         </div>
                      </div>
                    </div>

                    
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 w-full sm:w-auto">
                      <div className="text-xl font-black text-[#1b2316]">
                        {formatUSD(item.price * item.quantity)}
                      </div>
                      <button 
                        onClick={() => remove(item.productId)}
                        className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-xl transition-all"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar / Summary */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.02)] sticky top-32">
              <h3 className="text-xl font-black text-[#1b2316] mb-6">Order Summary</h3>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-center text-gray-500 font-bold text-sm">
                  <span>Subtotal</span>
                  <span className="text-[#1b2316]">{formatUSD(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 font-bold text-sm">
                  <span className="flex items-center gap-2">
                    Shipping {totalPrice > 50 && <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-black uppercase">Free</span>}
                  </span>
                  <span className="text-[#1b2316]">{formatUSD(shipping)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 font-bold text-sm">
                  <span>Estimated Tax</span>
                  <span className="text-[#1b2316]">{formatUSD(tax)}</span>
                </div>
                <div className="h-px bg-gray-100 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-[#1b2316]">Total</span>
                  <span className="text-2xl font-black text-[#dac889]">{formatUSD(finalTotal)}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate("/checkout")}
                disabled={items.length === 0}
                className="w-full bg-[#1b2316] text-white py-5 rounded-2xl font-black text-sm tracking-[0.1em] hover:opacity-90 transition-all shadow-[0_10px_30px_rgba(27,35,22,0.2)] disabled:opacity-50 disabled:shadow-none uppercase flex items-center justify-center gap-3 group"
              >
                Checkout <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <Truck size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fast Delivery</span>
                </div>
              </div>
            </div>

            {totalPrice < 50 && items.length > 0 && (
              <div className="mt-4 p-4 bg-[#dac889]/10 border border-[#dac889]/20 rounded-2xl">
                <p className="text-[#847949] text-xs font-bold leading-relaxed text-center">
                  Add <span className="font-black text-[#6d633b]">{formatUSD(50 - subtotal)}</span> more to your cart for <span className="font-black text-[#6d633b]">FREE SHIPPING!</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

    </div>
  );
};

export default CartPage;
