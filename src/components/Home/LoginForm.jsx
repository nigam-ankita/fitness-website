// import axios from 'axios';
// import React, { useState } from 'react';

// function LogInForm({ toggleModal }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''    
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/login", formData);
//       console.log('user created, response.data');
//     }
//     catch(error){
//      console.error( 'Error creating user:', error);
//     }
//   };

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <>
//       <h2>Log In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>
//             Email:
//             <input 
//               type="email" 
//               name="email"
//               value={formData.email} 
//               onChange={handleInput} 
//               required 
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <label>
//             Password:
//             <input 
//               type="password" 
//               name="password"
//               value={formData.password} 
//               onChange={handleInput} 
//               required 
//             />
//           </label>
//         </div>
//         <div className="form-group">
//           <button className="btn-submit" type="submit">Log In</button>
//         </div>
//       </form>
//       <p onClick={toggleModal} style={{cursor: 'pointer'}}>
//         Don't have an account? <span style={{color: 'blue', textDecoration: 'underline'}}>Sign up here</span>.
//       </p>
//     </>
//   );
// }

// export default LogInForm;


import axios from 'axios';
import React, { useState } from 'react';

function LogInForm({ toggleModal }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''    
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", formData);
      console.log('Login successful:', response.data);
      // Handle successful login here (e.g., save token, redirect, etc.)
    }
    catch(error){
      console.error('Error logging in:', error);
      setError('Failed to log in. Please check your credentials and try again.');
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
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Email:
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleInput} 
              required 
              aria-label="Email"
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
              aria-label="Password"
            />
          </label>
        </div>
        <div className="form-group">
          <button className="btn-submit" type="submit">Log In</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p onClick={toggleModal} style={{cursor: 'pointer'}}>
        Don't have an account? <span style={{color: 'blue', textDecoration: 'underline'}}>Sign up here</span>.
      </p>
    </>
  );
}

export default LogInForm;
