import React from 'react';
import { NavLink } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <NavLink to="/" activeClassName="my-active" className="brand-logo">Shopping</NavLink>
                    
                    <ul className="right">
                        <li><NavLink to="/" exact>Shop</NavLink></li>
                        <li><NavLink to="/cart">My cart</NavLink></li>
                        {/* <li><NavLink to="/cart"><i className="material-icons">shopping_cart</i></NavLink></li> */}
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;