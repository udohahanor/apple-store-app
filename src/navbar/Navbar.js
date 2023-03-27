import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav>
                <div className="logo">Apple Store</div>
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>News</li>
                    <li>About Us</li>
                <div className="cart">Cart</div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;