import React from 'react';
import './HeroSection.css'; 
import fitnessImage from '../../assets/body.png';

const HeroSection = () => {
  return (
    <div className="hero-section" id=''>
      <div className="hero-content">
        <h1 className="hero-title">BUILD YOUR <br /> BODY SHAPES <br /> WITH FITNESS</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-custom">Get Started</button>
          <button className="btn btn-custom">Watch Our Fitness</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={fitnessImage} alt="Fitness" className='img' />
      </div>
    </div>
  );
}

export default HeroSection;



