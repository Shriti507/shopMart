import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero";
import { useAuth } from "../context/useAuth";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user-dashboard", { replace: true });
      return;
    }

    const checkViewport = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        navigate("/login", { replace: true });
      } else {
        setIsMobile(false);
      }
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [navigate, isAuthenticated]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
