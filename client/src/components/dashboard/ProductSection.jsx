import React from 'react';
import { Plus } from 'lucide-react';

const products = [
  { id: 1, name: 'Fresh Hass Avocado Organic', qty: '2 pcs', price: 4.99, oldPrice: 6.99, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=300' },
  { id: 2, name: 'Farm Fresh Brown Eggs', qty: '12 pack', price: 3.49, oldPrice: 4.50, image: 'https://images.unsplash.com/photo-1587486913049-53cd8a560bf7?auto=format&fit=crop&q=80&w=300' },
  { id: 3, name: 'Whole Wheat Organic Bread', qty: '1 loaf', price: 2.99, oldPrice: null, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300' },
  { id: 4, name: 'Premium Red Apples', qty: '1 kg', price: 5.99, oldPrice: 7.99, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&q=80&w=300' },
  { id: 5, name: 'Organic Bananas Bunch', qty: '6 pcs', price: 1.99, oldPrice: 2.99, image: 'https://images.unsplash.com/photo-1571501474588-5c427f8a70bb?auto=format&fit=crop&q=80&w=300' },
  { id: 6, name: 'Fresh Organic Carrots', qty: '500g', price: 1.49, oldPrice: null, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=300' },
];

const ProductSection = ({ title, onAddToCart }) => {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-extrabold text-white tracking-tight">{title}</h2>
        <button className="text-[#dac889] text-sm font-bold hover:text-white transition-colors flex items-center gap-1 group">
          See more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>

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
    </div>
  );
};

export default ProductSection;
