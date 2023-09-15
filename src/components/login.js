// src/components/Auth.js
import React, { useState } from 'react';
import './css/login.css'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Send a POST request to your Express.js backend with the login or sign-up data
    const formData = { email, password };
    try {
      if (isLogin) {
        // Handle login
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Login successful, handle the response (e.g., store JWT token)
          const data = await response.json();
          console.log('Login successful:', data);
        } else {
          // Handle login failure (e.g., show error message)
          console.error('Login failed');
        }
      } else {
        // Handle sign-up
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Sign-up successful, handle the response
          const data = await response.json();
          console.log('Sign-up successful:', data);
          // Optionally, you can automatically log in the user after signing up
          setIsLogin(true);
        } else {
          // Handle sign-up failure (e.g., show error message)
          console.error('Sign-up failed');
        }
      }
    } catch (error) {
      console.error('Error:', error);
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
