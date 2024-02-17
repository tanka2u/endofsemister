import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const navLinks = ['Home','Event','Tasks','Profile'];
  const logout = () => {

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

