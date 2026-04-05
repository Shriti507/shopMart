import React, { useState } from 'react';
import Header from '../components/dashboard/Header';
import HeroBanner from '../components/dashboard/HeroBanner';
import CategorySection from '../components/dashboard/CategorySection';
import ProductSection from '../components/dashboard/ProductSection';
import Footer from '../components/Footer';

const UserDashboard = () => {
  const [cartCount, setCartCount] = useState(3); // Start with 3 items as per previous badge layout

  const handleAddToCart = (product) => {
    // Increment cart count when product is added
    setCartCount(prev => prev + 1);
    
    // In a real app we would dispatch to a global store context here.
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen text-gray-900 font-sans selection:bg-[#dac889] selection:text-[#1b2316] flex flex-col hide-scrollbar">
      {/* Sticky Top Bar for specific Dashboard */}
      <Header cartCount={cartCount} />

      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col fade-in">
        <HeroBanner />
        
        <div className="max-w-screen-xl mx-auto w-full px-6 pb-12 flex flex-col gap-10">
          <CategorySection />
        
        <ProductSection 
          title="You might need" 
          onAddToCart={handleAddToCart} 
        />
        
        {/* Additional Example Section */}
        <ProductSection 
          title="Fresh deals of the day" 
          onAddToCart={handleAddToCart} 
        />
        </div>
      </main>

      {/* Standard Footer */}
      <Footer />
    </div>
  );
};

export default UserDashboard;
