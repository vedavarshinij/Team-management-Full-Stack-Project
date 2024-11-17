import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
    <div className='navbar-container'>
        <h2 className='navbar-title'>Employee Management System</h2>
      <Link to="/" className='navbar-link'>Home</Link>
      <Link to="/addEmployee" className='navbar-link'>Add Employee</Link>
      <Link to="/view" className='navbar-link'>View Employees</Link>
      <Link to="/about" className='navbar-link'>About</Link>
      <Link to="/contact" className='navbar-link'>Contact</Link>
    </div>
  );
};

export default Navbar;
