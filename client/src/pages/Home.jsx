import React from 'react'
import Banner from '../components/home/Banner'
import Footer from '../components/home/Footer'
// import Hero from '../components/home/Hero'
import Navigation from '../components/Navigation'


const Home = () => {
  return (
    <div>
        
        <Banner/>
        <Navigation/>
        {/* <Hero/> */}
        <Footer/>
        
    </div>
  )
}

export default Home