import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li className="nav"><Link to="/todolist">TodoList</Link></li>
                <li className="nav"><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;