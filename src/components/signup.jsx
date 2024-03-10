import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/sigup.css';

const SignUp = () => {
    const navigate = useNavigate(); 

  const [formState, setFormState] = useState({
    Usr_name: '',
    Usr_email: '',
    Usr_phone: '',
    Usr_address: '',
    Usr_pass: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null); // State for error message

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (!validateForm()) return;
  };

  const validateForm = () => {
    if (formState.Usr_pass !== formState.confirmPassword) {
      setError('Passwords do not match');
      return false; // Prevent form submission
    }
    // Add other validation logic as needed
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Exit if validation fails

    try {
      const { confirmPassword, ...formDataWithoutConfirmPassword } = formState;

      const response = await fetch('http://localhost:4000/api/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithoutConfirmPassword),
      });

      if (response.ok) {
        navigate('/'); // Use navigate to navigate
      }else {
        throw new Error('Failed to sign up');
      }
    } catch (error) {
      setError(error.message); // Display error message
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="Usr_name"
            value={formState.Usr_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Usr_email"
            value={formState.Usr_email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="Usr_phone"
            value={formState.Usr_phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="Usr_address"
            value={formState.Usr_address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="Usr_pass"
            value={formState.Usr_pass}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if present */}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default SignUp;
