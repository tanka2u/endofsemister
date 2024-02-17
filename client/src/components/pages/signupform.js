import React, { useState } from "react";
const RegisterForm = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      dateofbirth: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic to submit the form data
        console.log(formData);
      };
    
      return (
        <div>
          <h2>Register</h2>
            <div>
              <label onSubmit={handleSubmit} For="username">Username:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
              />
              <div>
              <label htmlFor="dateofbirth">Date of Birth:</label>
              <input 
                type="text" 
                id="dateofbirth" 
                name="dateofbirth" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
              />
              <div>
              <label htmlFor="address">Address:</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit">Register</button>
          </div>
        </div>
      );
    
    export default RegisterForm;
