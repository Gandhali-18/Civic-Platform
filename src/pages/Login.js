import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSendOTP = () => {
        // Here you would typically make an API call to send the OTP
        console.log('Sending OTP to:', phoneNumber);
        // After sending the OTP, you can navigate to an OTP verification page
        // For now, let's just log it.
    };

    return (
        <div className="login-container">
            <div className="header">
                <span className="back-arrow" onClick={() => navigate('/')}>←</span>
                <h2>Login to your account</h2>
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