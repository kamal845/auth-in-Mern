import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:4000';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);// Navigation status state
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsNavigating(true);  // Set navigation status before async call
    try {
      const response = await axios.post('/signup', {
        Name: name,
        Phone: phone,
        Email: email,
        Password: password,
      });
      setMessage(response.data.message);
      if (response.data.message === 'Signup successful') {
        navigate('/login');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    } finally {
      setIsNavigating(false); // Reset navigation status after completion
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Phone:</label>
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" disabled={isNavigating}>Signup</button>
      </form>
      {isNavigating && <p>Processing...</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
