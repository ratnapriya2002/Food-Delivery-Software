


import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import {Link} from "react-router-dom"
function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
  };

  const validatePhoneNumber = (number) => {
    const re = /^\d{10}$/; // Validating a 10-digit phone number
    return re.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (username.length < 3) {
      errors.username = 'Username must be at least 3 characters long.';
    }

    if (!validateEmail(email)) {
      errors.email = 'Invalid email format.';
    }

    if (!validatePassword(password)) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits.';
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-food-composition-for-ramadan-image_15568113.png')"
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md min-h-[400px] relative">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        {isSubmitted ? (
          <p className="text-green-500 text-center">Signup successful!</p>
        ) : (
          <form onSubmit={handleSubmit} className="relative">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full px-4 py-2  focus:ring-gray-300 focus:border-gray-300 border rounded-lg focus:outline-none ${error.username ? 'border-red-500' : 'border-gray-300'}`}
              />
              {error.username && <p className="text-red-500 text-sm absolute">{error.username}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-gray-300 focus:border-gray-300 ${error.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {error.email && <p className="text-red-500 text-sm absolute">{error.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-gray-300 focus:border-gray-300  ${error.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {error.password && <p className="text-red-500 text-sm absolute">{error.password}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-gray-300 focus:border-gray-300  ${error.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {error.confirmPassword && <p className="text-red-500 text-sm absolute">{error.confirmPassword}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-gray-300 focus:border-gray-300  ${error.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
              />
              {error.phoneNumber && <p className="text-red-500 text-sm absolute">{error.phoneNumber}</p>}
            </div> 
            <Link to="/otp">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
            </Link>
          </form>
        )}

        <div className="m-4 flex items-center justify-center">
          {/* Google Button */}
          <button className="mt-3 mb-3 bg-transparent text-blue-500 py-2 rounded-lg flex items-center justify-center transition duration-200 mr-2">
            <FaGoogle className="mr-2 text-4xl" />
          </button>

          {/* Facebook Button */}
          <button className="mt-3 mb-3 bg-transparent text-blue-600 py-2 rounded-lg flex items-center justify-center transition duration-200">
            <FaFacebook className="mr-2 text-4xl" />
          </button>
        </div>
       
      </div>
    </div>
  );
}

export default SignupPage;
