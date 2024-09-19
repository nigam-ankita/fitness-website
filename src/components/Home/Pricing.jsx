import React, { useState } from 'react';
import './Pricing.css';
import trainerImage1 from '../../assets/1.png';
import trainerImage2 from '../../assets/2.png';
import trainerImage3 from '../../assets/3.png';

const Pricing = () => {
  const [trainerOption, setTrainerOption] = useState('with-trainer');

  const renderPricingOptions = () => {
    const options = [
      { type: 'Day', price: trainerOption === 'with-trainer' ? '1500' : '1000', image: trainerImage1 },
      { type: 'Week', price: trainerOption === 'with-trainer' ? '2400' : '2000', image: trainerImage2 },
      { type: 'Month', price: trainerOption === 'with-trainer' ? '5000' : '3000', image: trainerImage3 }
    ];

    return options.map((option, index) => (
      <div key={index} className="pricing-section"  style={{ backgroundImage: `url(${option.image})` }}>
        
        <h2>{option.type}</h2>
        <p>Rs. {option.price}</p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <button>Join Now</button>
      </div>
    ));
  };

  return (
    <div className="pricing" id='Pricing' >
      <h1>Membership Pricing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="filter-buttons">
        <button 
          className={trainerOption === 'without-trainer' ? 'active' : ''}
          onClick={() => setTrainerOption('without-trainer')}
        >
          Without Trainer
        </button>
        <button 
          className={trainerOption === 'with-trainer' ? 'active' : ''}
          onClick={() => setTrainerOption('with-trainer')}
        >
          With Trainer
        </button>
      </div>
      <div className="pricing-options">
        {renderPricingOptions()}
      </div>
    </div>
  );
};

export default Pricing;
