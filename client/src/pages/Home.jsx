import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/home/Banner'
import Footer from '../components/home/Footer'
import Hero from '../components/home/Hero'
import Navigation from '../components/Navigation'


const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check viewport width on mount
    const checkViewport = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        navigate('/login', { replace: true });
      } else {
        setIsMobile(false);
      }
    };

    checkViewport();

    // Re-check on resize
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [navigate]);

  if (isMobile) {
    return null; 
  }

  return (
    <div>
        
        <Banner/>
        <Navigation/>
        <Hero/>
        <Footer/>
        
    </div>
  )
}

export default Home