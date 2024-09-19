import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm({ toggleModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/signup', formData);
      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleInput} 
              required 
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleInput} 
              required 
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password:
            <input 
              type="password"
              name="password" 
              value={formData.password} 
              onChange={handleInput} 
              required 
            />
          </label>
        </div>
        <div className="form-group">
          <button className="btn-submit" type="submit">Sign Up</button>
        </div>
      </form>
      <p onClick={toggleModal} style={{cursor: 'pointer'}}>
        If you already have an account, click here to <span style={{color: 'blue', textDecoration: 'underline'}}>log in</span>.
      </p>
    </>
  );
}

export default SignUpForm;
