import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const divStyle = {marginTop: "20px"};
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(username);
        console.log(password);
        const data = {
            "grant_type":"password",
            "client_id":"projectx",
            "username": username,
            "password": password
        };
        const response = await axios.post('http://localhost:3001/login', data);
        console.log(response);
      };
    
    return (
        <>
            <div className="auth">
                <div className="auth-container">
                    <form onSubmit={handleSubmit}>
                    <label className="label">Username</label><br/>
                    <input
                    type="text"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                     className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" required/>
                    <br />
                    <label className="label">Password</label>
                    <br />
                    <input 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" required/>
                    <br />
                        {/* <label className="label">Confirm Password</label>
                        <input className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" required id="confirm-password" type="password" /> */}
                        
                        <button style={divStyle} type="submit" className="submit">Login</button>
                    </form>
                    <p className="switch"></p>
                    <p className="error"></p>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
