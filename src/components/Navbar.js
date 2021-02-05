import React from 'react'
import logo from '../components/img/logo.png'
const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbartext">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navbar_ul">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar
