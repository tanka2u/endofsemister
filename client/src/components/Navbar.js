import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ onLogout }) => {
  const navLinks = ['Home','Event','Tasks','Profile','Logout'];
  return (
    <>
    <div class="navbar">
        {navLinks.map((route, index) => (
            <Link
            key={index}
              to={route.toLowerCase()}
              smooth={true}
              duration={500}>
              {route}
            </Link>
        ))}
        </div>
    </>
  );
}

export default Navbar;

