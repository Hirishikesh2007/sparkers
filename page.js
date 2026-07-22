"use client";

import { useState } from "react";
import "./login.css";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(email === "" || password === ""){
      alert("Please enter email and password");
      return;
    }

    alert("Login Successful 🚀");

  };


  const googleLogin = () => {

    alert("Google Authentication Coming Soon 🌐");

  };


  return (

    <div className="login-container">

      <div className="login-box">


        <div className="logo">
          🤖
        </div>


        <h1>
          AI Interview Hub
        </h1>


        <p>
          Prepare smarter with AI powered interviews
        </p>


        <input

          type="email"

          placeholder="Enter your email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />


        <input

          type="password"

          placeholder="Enter your password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

        />


        <button 
          className="login-btn"
          onClick={handleLogin}
        >

          Login

        </button>


        <div className="or">

          -------- OR --------

        </div>


        <button

          className="google-btn"

          onClick={googleLogin}

        >

          🌐 Continue with Google

        </button>


        <p className="signup">

          Don't have an account?
          
          <span>
            Sign Up
          </span>

        </p>


      </div>

    </div>

  );

}