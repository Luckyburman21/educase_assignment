import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";

function Create_ac() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isCompany: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "true",
    });
  };

  const handleCreateAccount = () => {
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    navigate("/account_setting", {
      state: { fullName: formData.fullName, email: formData.email },
    });
  };

  return (
    <div className="Create_ac">
      <div className="create_content">
        <h2>Create your Popx Account</h2>
        <fieldset>
          <legend>
            Full Name<sup>*</sup>
          </legend>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder=""
          />
        </fieldset>
        <fieldset>
          <legend>
            Phone number<sup>*</sup>
          </legend>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder=""
          />
        </fieldset>
        <fieldset>
          <legend>
            Email address<sup>*</sup>
          </legend>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder=""
          />
        </fieldset>
        <fieldset>
          <legend>
            Password<sup>*</sup>
          </legend>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder=""
          />
        </fieldset>
        <fieldset>
          <legend>Company name</legend>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder=""
          />
        </fieldset>
        <label htmlFor="company">Are you a company?</label>
        <div className="radio">
          <div className="radio_box">
            <input
              type="radio"
              name="isCompany"
              value="true"
              checked={formData.isCompany}
              onChange={handleRadioChange}
            />
            <span>Yes</span>
          </div>
          <div className="radio_box">
            <input
              type="radio"
              name="isCompany"
              value="false"
              checked={!formData.isCompany}
              onChange={handleRadioChange}
            />
            <span>No</span>
          </div>
        </div>
        <button className="create_btn" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Create_ac;
