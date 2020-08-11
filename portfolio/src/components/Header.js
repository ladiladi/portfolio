import React from "react";
import './Header.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Header(props) {
  return (
    <header id="home" className="fullHeader">
        <nav id="nav-wrap">
        <BrowserRouter>
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>
        </BrowserRouter>
        </nav>
        <div className="headerInfo">
            <h1>Tony Valkama</h1>
            <h2>Software Developer</h2>
            <h3>tony.valkama@outlook.com</h3>
        </div>
    </header>
  )
}
 
export default Header;