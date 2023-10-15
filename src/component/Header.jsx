import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-raja.png';

const Header = () => {
   return (
      <header className="header">
         <img src={logo} alt="logo-raja" className="header-logo" />

         <nav className="main-nav">
            <ul className="main-nav-list">
               <li>
                  <NavLink exact activeClassName="active" className="main-nav-link" to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" className="main-nav-link" to="/about">About</NavLink>
               </li>
               <li>
                  <NavLink activeClassName="active" className="main-nav-link" to="/skills">Contact</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;