// src/components/Auth.js
import React, { useState } from 'react';
import './css/login.css'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your Express.js backend with the login or sign-up data
    const formData = { email, password };
    if (isLogin) {
      // Handle login
      console.log('Logging in with:', formData);
    } else {
      // Handle sign-up
      console.log('Signing up with:', formData);
    }
  };

  return (
    <div className='auth'>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
                <label>Email :</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password :</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <button type='link' onClick={() => setIsLogin(false)}>Sign Up</button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button type='link' onClick={() => setIsLogin(true)}>Login</button>
          </>
        )}
      </p>
    </div>
  );
};

export default Auth;
