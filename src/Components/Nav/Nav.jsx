import React from 'react';
import { NavLink } from 'react-router';
import './nav.css';
const Nav = () => {
    return (
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </nav>
    );
};

export default Nav;
