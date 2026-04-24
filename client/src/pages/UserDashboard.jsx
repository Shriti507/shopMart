import React from "react";
import Header from "../components/dashboard/Header";
import HeroBanner from "../components/dashboard/HeroBanner";
import CategorySection from "../components/dashboard/CategorySection";
import ProductSection from "../components/dashboard/ProductSection";

const UserDashboard = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-col flex-grow hide-scrollbar">
      <Header />

      <main className="w-full flex-grow flex flex-col fade-in">
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

    </div>
  );
};

export default UserDashboard;
