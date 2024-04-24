import React from "react";
import "./signin.css";
function Signin() {
  return (
    <div className="signin_div">
      <div className="signin_content">
        <h2>Signin to your Popx Account</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <fieldset>
          <legend>Email Address</legend>
          <input type="text" placeholder="enter email address" />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="text" placeholder="enter password" />
        </fieldset>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Signin;
