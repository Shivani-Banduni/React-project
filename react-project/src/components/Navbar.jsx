import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
const Navbar = () => {
    return (
        <div className='nav'>
            <nav className="bg-blue-500 p-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-xl font-bold">
          My Logo
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
        <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/Product">Product</Link>
        </ul>
      </div>
    </div>
  </nav>
        </div>
    );
}

export default Navbar;
