/**
 * purpose: A Nav component for the apps navigation links.
 */



/**
 * imported dependencies
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * the Nav const will route and add a header html to the top of the gallery
 */

const Nav = () => {
    return (
            <nav className = "main-nav">
                <ul>
                    <li><NavLink to="/forest">Forest</NavLink></li>
                    <li><NavLink to="/watercolor">Watercolor</NavLink></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                </ul>
            </nav>
    )
}

export default Nav