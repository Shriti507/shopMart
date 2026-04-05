import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/home/Hero'


const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  
  const isAuthenticated = false;

  useEffect(() => {
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
    <>
        <Hero/>
    </>
  )
}

export default Home