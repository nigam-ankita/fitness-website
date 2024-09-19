import React from 'react';
import './Footer.css';
import backgroundMap from '../../assets/maps 1.png'; 

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-header">
        <h1>We’re welcome you to <span>join us!</span></h1>
      </div>
      <div className="footer-contact" style={{ backgroundImage: `url(${backgroundMap})` }}>
        <h2>Contact</h2>
        <p><i className="fa fa-envelope"></i> LPGFITNESS@FITNESS.COM</p>
        <p><i className="fa fa-phone"></i> +6289988772233</p>
        <p><i className="fa fa-map-marker"></i> K.H. Ahmad Dahlan, 44 Bandar Lampung</p>
        <div className="footer-social">
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
          <a href="#"><i className="fa fa-tiktok"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023, All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
