import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:9696/api/authentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
          FirstName:name,
          EmailId:email,
          Password:password,
        }),
      });
console.log("response",response)
      if (response.status===true) {
        
        console.log('Sign up successful');
      } else {
       
        console.error('Sign up failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error.message);
    }
  };

  

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button onClick={handleSignUp}>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
