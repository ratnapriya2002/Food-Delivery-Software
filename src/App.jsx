import { useState,useEffect } from "react";
import SignupPage from './components/signup/Signupform'
import Otpscreen from './components/signup/otpscreen'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/signup/Loginpage";
import Homepage from "./components/Home/homepage";

function App() {

  
  return (
    <>
    <div>
      <BrowserRouter>
     
        <Routes>
        
          
          <Route path="/" element={<SignupPage/>} />
          <Route path="/otp" element={<Otpscreen/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/home" element={<Homepage/>} />
          
        </Routes>
       
      </BrowserRouter>
    </div>
    </>
  );
 
}

export default App;