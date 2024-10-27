import React from 'react'
import { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
  
    const registerClick = async () => {
      try {
        const response = await fetch('http://localhost:3035/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, role, username }),
        });
        const data = await response.json();
  
        if (response.ok) {
          localStorage.setItem('token', data.tokenSigned); // Save token
          alert('User registered successfully!');
        } else {
          alert(data.message || 'Registration failed.');
        }
      } catch (error) {
        console.error('Error registering user:', error);
        alert('An error occurred during registration.');
      }
    };
  
    return (
      <div className='flex justify-center mt-[100px]'>
        <div className='flex flex-col gap-[20px] w-[400px]'>
          <div className='text-center'>Register</div>
          <label htmlFor="r1">E-mail:</label>
          <input type="text" id="r1" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="r2">Password:</label>
          <input type="password" id="r2" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="r3">Role:</label>
          <input type="text" id="r3" value={role} onChange={(e) => setRole(e.target.value)} />
          <label htmlFor="r4">Username:</label>
          <input type="text" id="r4" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={registerClick} className='bg-[#2abe2a] rounded-full'>Create Account</button>
        </div>
      </div>
    );
  }