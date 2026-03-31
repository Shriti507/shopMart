import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/home/Banner'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Navigation from '../components/Navigation'


const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  
  // toggle this to false to test the normal homepage
  const isAuthenticated = false;

  useEffect(() => {
    // if user is authenticated immediately redirect to user-dashboard
    if (isAuthenticated) {
      navigate('/user-dashboard', { replace: true });
      return;
    }

    
    const checkViewport = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        navigate('/login', { replace: true });
      } else {
        setIsMobile(false);
      }
    };

    checkViewport();

   
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