import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();

    const handleSendOTP = () => {
        // API call to send the OTP
        console.log('Sending OTP to:', phoneNumber);
        // After sending the OTP, navigate to an OTP verification page
        // Then just logout
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`login-container ${theme}-mode`}>
            <div className="header">
                <span className="back-arrow" onClick={() => navigate('/')}>←</span>
                <h2>Login to your account</h2>
                <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    aria-label="Toggle dark/light mode"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <div className="input-with-icon">
                    <span className="icon">📞</span>
                    <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
            </div>
            <button className="send-code-button" onClick={handleSendOTP}>
                Send OTP
            </button>
        </div>
    );
};

export default Login;