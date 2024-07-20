import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsNavigating(true);
    try {
      const response = await axios.post('/signup', {
        Name: name,
        Phone: phone,
        Email: email,
        Password: password,
      });
      setMessage(response.data.message);
      if (response.data.status === 'success') {
        navigate('/login');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    } finally {
      setIsNavigating(false);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={isNavigating}>Signup</button>
      </form>
      {isNavigating && <p>Processing...</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
