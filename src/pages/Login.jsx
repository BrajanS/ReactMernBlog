import React, { useState, useEffect } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const connectClick = async () => {
      try {
        const response = await fetch('http://localhost:3035/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          
          // Store token in localStorage
          localStorage.setItem('token', data.tokenSigned);
          
          // Optional: Redirect or update login state here
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    return (
      <div className="flex justify-center mt-[100px]">
        <div className="flex flex-col gap-[20px] w-[400px]">
          <div className="text-center">Login</div>
          <label htmlFor="l1">E-mail:</label>
          <input
            type="text"
            id="l1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="l2">Mot de passe:</label>
          <input
            type="password"
            id="l2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={connectClick} className="bg-[#2abe2a] rounded-full">
            Se connecter
          </button>
        </div>
      </div>
    );
  }