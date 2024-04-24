import React from "react";
import { useLocation } from "react-router-dom";
import "./ac_setting.css";
import Profile from "./images/profile.png";
import Edit from "./images/edit.png";

function Ac_setting() {
  // Get data from location state
  const location = useLocation();
  const { fullName, email } = location.state || {};

  return (
    <div className="Ac_setting">
      <header>
        <h1>Account Setting</h1>
      </header>

      <section className="image-sec">
        <div className="img-box">
          <img src={Profile} alt="profile" height={"80rem"} />
          <img id="edit_icon" src={Edit} alt="edit" height={"25rem"} />
        </div>

        <div className="right">
          <b>{fullName}</b>
          <p>{email}</p>
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet quae,ex aliquam commodi fugiat eos
        necessitatibus ipsum veniam expedita, quam odit? Ut iure, fugit
        accusantium odio asperiores ipsam voluptas explicabo, vitae modi ea
        repellat?
      </p>
    </div>
  );
}

export default Ac_setting;
