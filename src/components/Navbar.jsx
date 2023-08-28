import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className='nav-name'>
                <h2>TRENDY WEARS</h2>
            </div>
            <div className="links">
                <div className="home-link">
                    <Link to="/">Home</Link>
                </div>

                <div className="cart-link">
                    <Link to="/cart">
                        <ShoppingCart size={32} />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Navbar;