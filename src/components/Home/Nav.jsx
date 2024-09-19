
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Nav.css'; 
import AuthModel from './AuthModel';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a className="navbar-brand text-white" href="#">LPG Fitness</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3 px-5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Trainers">Trainers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#SuccessStory">Success Story</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right d-flex align-items-center">
          <form className="d-flex">
            <button className="btn btn-outline-light" type="button" onClick={toggleModal}>Join Us Now</button>
          </form>
        </div>
      </div>
      <AuthModel isOpen={isModalOpen} toggleModal={toggleModal} />
    </nav>
  );
}

export default Nav;
