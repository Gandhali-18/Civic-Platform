import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CreateAccount = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();

    const handleSendCode = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            });

            if (response.ok) {
                console.log('Phone number registered successfully!');
                // navigate('/verify-otp');
            } else {
                const errorData = await response.json();
                console.error('Registration failed:', errorData.message);
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`create-account-container ${theme}-mode`}>
            <div className="header">
                <span className="back-arrow" onClick={() => navigate('/')}>←</span>
                <h2>Create Account</h2>
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
            <div className="form-group">
                <label>Location</label>
                <div className="input-with-icon">
                    <span className="icon">📍</span>
                    <input
                        type="text"
                        placeholder="Enter your area/locality"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>
            <button className="send-code-button" onClick={handleSendCode}>
                Send Verification Code
            </button>
        </div>
    );
};

export default CreateAccount;