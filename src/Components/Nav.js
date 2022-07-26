//A Nav component for the apps navigation links.

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
            <nav className = "main-nav">
                <ul>
                    <li><NavLink to="/forest">Forest</NavLink></li>
                    <li><NavLink to="/watercolor">Watercolor</NavLink></li>
                    <li><NavLink to="/books">books</NavLink></li>
                </ul>
            </nav>
    )
}

export default Nav