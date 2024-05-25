import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header" style={{backgroundColor: '#'}}>
            {/* 1st box */}
            <ul>
                <li>
                    <Link to='/'>Gourmet au Catering</Link>
                </li>
            </ul>
            {/* 2nd box */}
            {/* <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <ul className={menuOpen ? "open" : ''}>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to='menu'>
                        Menu
                    </Link>
                </li>
                <li>
                    <Link to='contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>)
}

export default Header;