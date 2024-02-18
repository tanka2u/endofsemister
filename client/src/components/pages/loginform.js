import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
function LoginForm() {
    const { setUser, user } = useContext(AuthContext); 
    const divStyle = {marginTop: "20px"};
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const data = {
            "username": username,
            "password": password
        };
        try {
            const response = await axios.post('http://localhost:3001/login', data);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setUser(response.data.user);
            console.log(user);
            // window.location.href = "/home"
            // navigate("/home");
        } catch(error) {
            alert('Invalid username or password');
        }
        
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
                        <Link to={'/register'}>Do not have Account? Register</Link>
                    </form>
                    <p className="switch"></p>
                    <p className="error"></p>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
