import React from "react";
import Header from "../components/dashboard/Header";
import HeroBanner from "../components/dashboard/HeroBanner";
import CategorySection from "../components/dashboard/CategorySection";
import ProductSection from "../components/dashboard/ProductSection";
import Footer from "../components/Footer";

const UserDashboard = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen text-gray-900 font-sans selection:bg-[#dac889] selection:text-[#1b2316] flex flex-col hide-scrollbar">
      <Header />

      <main className="w-full flex-1 flex flex-col fade-in">
        <HeroBanner />

        <div className="max-w-screen-xl mx-auto w-full px-6 pb-12 flex flex-col gap-10">
          <CategorySection />

          <ProductSection
            title={
              <>
                You might <span className="text-[#dac889]">need</span>
              </>
            }
          />

          <ProductSection
            title={
              <>
                Fresh <span className="text-[#dac889]">deals</span> of the day
              </>
            }
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;
