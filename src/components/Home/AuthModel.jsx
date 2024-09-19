import React, { useState } from 'react';
import './SignUpModal.css'; 
import SignUpForm from './SignUpForm';
import LogInForm from './LoginForm';

function AuthModel({ isOpen, toggleModal }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            {!isLoginOpen ? (
              <SignUpForm toggleModal={toggleLoginModal} />
            ) : (
              <LogInForm toggleModal={toggleLoginModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthModel;
