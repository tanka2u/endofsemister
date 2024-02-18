import React, { useState } from "react";
import Layout from "../Layout";
import Style from "./RegisterForm.css";
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    dateofbirth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      const response = await axios.post('http://localhost:3001/user/create', formData);
      if (response.status === 200) {
        alert('user saved');
      } else {
        alert('something went wrong.');
      }
    } else {
      alert('password and confirm password mismatch');
    }
  };

  return (
    <>
      <Layout>
        <div className="container">
          <form onSubmit={handleSubmit}>
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>          
            <div>
            <div className="name">Name:</div>
                <input placeholder="Please, Enter your name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className="inputs">
              <div className="input">
              
              <div className="username">Username:</div>
                <input placeholder="Please, Enter your username"
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input">
              <div className="email">Email:</div>
              <input placeholder="Please, Enter your e-mail"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              </div>
              <div className="input">
              <div className="password">Password:</div>
              <input placeholder="Please, Enter your password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              </div>
              <div className="input">
              <div className="confirmPassword">Confirm Password:</div>
              <input placeholder="Please, re-enter your password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              </div>
              <div className="input">
              <div className="dateofbirth">DOB:</div>
              <input placeholder="Please, Enter Date of Birth"
                type="date"
                id="dateofbirth"
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                required
              />
              </div>
              <div className="input">
              <div className="address">Address:</div>
              <input placeholder="Please Enter Address"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              </div>
            </div>
            <button type="submit" className="button">Register</button>  
          </form>
        </div>
      </Layout>
    </>
  );
};

export default RegisterForm;
