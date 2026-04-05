import React, { useState, useEffect } from 'react';
import { Plus, Loader2, AlertCircle } from 'lucide-react';
import { fetchProducts } from '../../services/api';

const ProductSection = ({ title, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
       
        const randomSkip = Math.floor(Math.random() * 30);
        const data = await fetchProducts(6, randomSkip);
        
        
        const mappedProducts = data.map(item => ({
          id: item.id,
          name: item.title,
          qty: '1 unit', 
          price: item.price,
          oldPrice: item.discountPercentage ? (item.price * (1 + item.discountPercentage/100)) : null,
          image: item.thumbnail
        }));
        
        setProducts(mappedProducts);
        setError(null);
      } catch {
        setError("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-extrabold text-white tracking-tight">{title}</h2>
        <button className="text-[#dac889] text-sm font-bold hover:text-white transition-colors flex items-center gap-1 group">
          See more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>

      {isLoading && (
        <div className="w-full flex flex-col items-center justify-center py-12 text-[#dac889] gap-3 bg-[#212b1b]/50 rounded-2xl border border-white/5">
          <Loader2 className="animate-spin" size={32} />
          <p className="text-sm font-bold">Loading products...</p>
        </div>
      )}

      {error && !isLoading && (
        <div className="w-full flex flex-col items-center justify-center py-12 text-red-400 gap-3 bg-[#212b1b]/50 rounded-2xl border border-white/5">
          <AlertCircle size={32} />
          <p className="text-sm font-bold">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="flex overflow-x-auto pb-6 -mx-6 px-6 md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 xl:mx-0 xl:px-0 [&::-webkit-scrollbar]:hidden" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {products.map(product => (
            <div key={product.id} className="min-w-[160px] bg-[#212b1b] rounded-2xl p-4 border border-white/5 hover:border-[#dac889]/30 transition-all duration-300 group flex flex-col shadow-lg hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-[#dac889]/40">
              <div className="bg-white rounded-[14px] p-3 mb-4 flex items-center justify-center aspect-square shadow-inner overflow-hidden border border-gray-100">
                 <img src={product.image} alt={product.name} className="object-cover w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out" />
              </div>
              
              <div className="flex flex-col flex-1">
                <span className="text-gray-400 text-xs font-semibold mb-1 tracking-wide">{product.qty}</span>
                <h4 className="text-white text-sm font-bold leading-snug mb-3 group-hover:text-gray-200 line-clamp-2 h-10">{product.name}</h4>
                
                <div className="mt-auto flex items-end justify-between gap-2">
                  <div className="flex flex-col">
                    {product.oldPrice ? (
                      <span className="text-gray-500 text-[10px] font-bold line-through">${product.oldPrice.toFixed(2)}</span>
                    ) : (
                      <div className="h-[15px]"></div>
                    )}
                    <span className="text-[#dac889] font-black text-lg tracking-tight leading-none">${product.price.toFixed(2)}</span>
                  </div>
                  
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="bg-[#171e13] text-white hover:bg-[#dac889] hover:text-[#1b2316] w-9 h-9 rounded-xl flex items-center justify-center transition-colors border border-white/10 group-hover:border-transparent shrink-0 active:scale-90"
                  >
                     <Plus size={18} strokeWidth={3}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSection;
