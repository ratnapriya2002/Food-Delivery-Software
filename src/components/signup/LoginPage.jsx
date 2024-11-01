// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function LoginPage() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const validatePhoneNumber = (number) => /^\d{10}$/.test(number);

//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     if (!validatePhoneNumber(phoneNumber)) {
//       setError('Phone number must be 10 digits.');
//     } else {
//       setError('');
//       setOtpSent(true);
//       setOtp('123456'); // Default OTP for testing purposes
//       console.log('OTP sent: 123456'); // Logs OTP to console
//     }
//   };
  
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (otp === '123456') { // Default OTP check
//       setIsLoggedIn(true);
//       setError('');
//       console.log('Logging in successfully with OTP');
//     } else {
//       setError('Invalid OTP. It should be 6 digits.');
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-food-composition-for-ramadan-image_15568113.png')"
//       }}
//     >
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md min-h-[300px] relative">
//         <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
//         {isLoggedIn ? (
//           <div className="text-center text-green-500 font-semibold">
//             User logged in successfully!
//           </div>
//         ) : (
//           <form onSubmit={otpSent ? handleLogin : handleSendOtp} className="relative">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
//               <input
//                 type="text"
//                 placeholder="Enter your phone number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-gray-300 ${error ? 'border-red-500' : 'border-gray-300'}`}
//                 disabled={otpSent}
//               />
//             </div>
//             {otpSent && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">OTP</label>
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-gray-300 ${error ? 'border-red-500' : 'border-gray-300'}`}
//                   maxLength="6"
//                 />
//               </div>
//             )}
//             {error && <p className="text-red-500 text-sm mb-4">{error}</p>} 
//             <Link to="/home">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//             >
//               {otpSent ? 'Login' : 'Send OTP'}
//             </button>
//             </Link>
//           </form>
//         )}
//         <div className="mt-4 text-center">
//           <Link to="/" className="text-blue-500 hover:underline">
//             Don't have an account? Sign Up
//           </Link>
//         </div>
//       </div>

//       {/* Success Popup */}
//       {isLoggedIn && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <p className="text-green-500 font-semibold mb-4">User logged in successfully!</p>
//             <button
//               onClick={() => setIsLoggedIn(false)}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginPage;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validatePhoneNumber = (number) => /^\d{10}$/.test(number);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Phone number must be 10 digits.');
    } else {
      setError('');
      setOtpSent(true);
      setOtp('123456'); // Default OTP for testing purposes
      console.log('OTP sent: 123456'); // Logs OTP to console
    }
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (otp === '123456') { // Default OTP check
      setIsLoggedIn(true);
      setError('');
      toast.success('User logged in successfully!');
      console.log('Logging in successfully with OTP');
    } else {
      setError('Invalid OTP. It should be 6 digits.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-food-composition-for-ramadan-image_15568113.png')"
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md min-h-[300px] relative">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        {isLoggedIn ? (
          <div className="text-center text-green-500 font-semibold">
            User logged in successfully!
          </div>
        ) : (
          <form onSubmit={otpSent ? handleLogin : handleSendOtp} className="relative">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-gray-300 ${error ? 'border-red-500' : 'border-gray-300'}`}
                disabled={otpSent}
              />
            </div>
            {otpSent && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">OTP</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-gray-300 ${error ? 'border-red-500' : 'border-gray-300'}`}
                  maxLength="6"
                />
              </div>
            )}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>} 
            <Link to="/home">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                {otpSent ? 'Login' : 'Send OTP'}
              </button>
            </Link>
          </form>
        )}
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>

      {/* Toastify Container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

export default LoginPage;
