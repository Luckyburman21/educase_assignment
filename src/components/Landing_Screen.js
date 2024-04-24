import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./LSS.css";
function Landing_Screen() {
  const navigate=useNavigate()
  return (
    <div className="landing_screen">
<div className="Landing_content">
    <h1>Welcome to PopX</h1>
    <p>Lorem ipsum dolor sit amet,</p>
    <p>Lorem ipsum dolor sit amet,</p>
    <button id='create_btn' onClick={()=>navigate("/create_account")}>Create Account</button>
    <button id='Login_btn' onClick={()=>navigate("/signin")}>Already Registered?Login</button>
</div>
    </div>
  )
}

export default Landing_Screen
