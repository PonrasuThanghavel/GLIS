import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/sigup.css';

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    role: '', // New state for role selection
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional validation
    if (!formState.role) {
      setError('Please select a role');
      return;
    }

    // Submit form data
    try {
      // Your submission logic here
    } catch (error) {
      setError('Failed to sign up');
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
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formState.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
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
        </div>
        <div>
          <label>Select Role:</label>
          <select name="role" value={formState.role} onChange={handleChange}>
            <option value="">Select</option>
            <option value="farmer">Farmer</option>
            <option value="governmentOfficial">Government Official</option>
          </select>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default SignUp;
