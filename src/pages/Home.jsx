
import React from 'react';
import Nav from '../components/Home/Nav';
import HeroSection from '../components/Home/HeroSection';
import Card from '../components/Home/Card';
import { FaDumbbell, FaUserTie, FaBiking } from 'react-icons/fa'; // Importing icons
import About from '../components/Home/About';
import Trainer from '../components/Home/Trainer';
import Pricing from '../components/Home/Pricing';
import Members from '../components/Home/Members';
import Footer from '../components/Home/Footer';


function Home() {
  return (
    <div>
      
      <Nav />
      <HeroSection />
      <div className="card-container">
        <Card 
          icon={<FaDumbbell />} 
          title="WeightLifting" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum." 
        />
        <Card 
          icon={<FaUserTie />} 
          title="Private Training" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum." 
        />
        <Card 
          icon={<FaBiking />} 
          title="Build Muscle" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum." 
        />
      </div>
    <About/>
    <Trainer/>
    <Pricing/>
    <Members/>
    <Footer/>
    </div>
  );
}

export default Home;
