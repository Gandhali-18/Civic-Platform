import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-container">
            <div className="logo-section">
                <div className="logo-bubble">
                    <span className="logo-icon">💬</span>
                </div>
                <h1 className="app-title">CivicVoice</h1>
                <p className="app-slogan">Your voice for a better community</p>
            </div>
            <div className="button-container">
                <button
                    className="button create-account-button"
                    onClick={() => navigate('/create-account')}
                >
                    Create Account
                </button>
                <button
                    className="button login-button"
                    onClick={() => navigate('/login')} // Update this line
                >
                    I have an account
                </button>
            </div>
        </div>
    );
};

export default Welcome;