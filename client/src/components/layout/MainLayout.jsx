import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Banner from '../home/Banner';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
