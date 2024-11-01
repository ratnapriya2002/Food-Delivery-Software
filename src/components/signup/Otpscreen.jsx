import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function OtpScreen() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("");
    const otpRefs = useRef([]);

    const handleOtpChange = (value, index) => {
        if (isNaN(value)) return; 

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            otpRefs.current[index + 1].focus();
        }
    };

    const handleVerifyOtp = () => {
        const enteredOtp = otp.join("");
        const correctOtp = "1234"; 
        if (enteredOtp === correctOtp) {
            setError("");
            alert("OTP Verified Successfully!");
        } else {
            setError("Invalid OTP. Please try again.");
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Left Side: Image */}
            <div className="md:w-1/2 bg-cover bg-center" style={{
                backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-food-composition-for-ramadan-image_15568113.png')",
            }}>
            </div>
            
            {/* Right Side: OTP Form */}
            <div className="flex items-center justify-center md:w-1/2 bg-white p-6">
                <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Enter OTP</h1>
                    <p className="text-center text-gray-500 mb-4">Please enter the 4-digit OTP sent to your email</p>
                    
                    <div className="flex space-x-4 justify-center mb-4">
                        {otp.map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={otp[index]}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                ref={(el) => otpRefs.current[index] = el}
                                className="w-12 h-12 border rounded-md text-center text-lg focus:outline-none focus:border-blue-500"
                            />
                        ))}
                    </div>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <Link to="/home">

                    <button
                        onClick={handleVerifyOtp}
                        className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
                    >
                        Verify OTP
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OtpScreen;
