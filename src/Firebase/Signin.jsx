

import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import app from '../firebasedata';
import  "../Style/Signin.css"

const auth = getAuth(app);

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  const navigate = useNavigate();


    function register() {
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                alert("Registration successful!");
                console.log(data);
                setEmail("");
                setPassword("");
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
            navigate('/cart');
    }

    return (
        <div className="signin-container">
            <h1>Sign Up</h1>
            {error && <p className="error-message">{error}</p>}
            <input
                type="text"
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register} className="signup-button">Sign Up</button>
            <p className="footer-text">Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
}
