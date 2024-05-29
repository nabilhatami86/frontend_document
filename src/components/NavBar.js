import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="SNKI Logo" className="logo" />
            </Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/documents">Document List</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
