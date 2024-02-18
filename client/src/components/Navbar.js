import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Navbar = ({ onLogout }) => {
  const { user, setUser } = useContext(AuthContext); 
  const navigate = useNavigate();
  const navLinks = ['Home','Event','Tasks','Profile'];
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  }
  return (
    <>
    <div class="navbar">
        {navLinks.map((route, index) => (
            <Link
            key={index}
              to={`/${route.toLowerCase()}`}>
              {route}
            </Link>
        ))}
        <Link to={'/login'}onClick={logout}>Logout</Link>
        </div>
    </>
  );
}

export default Navbar;

