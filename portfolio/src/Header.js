import React from "react";
import './Header.css';

function Header(props) {
  return (
    <header id="home" className="fullHeader">
        <nav id="nav-wrap">
            <ul id="nav" className="nav">
                <li className="current"><a href="#home">Home</a></li>
                <li className="projects"><a href="#projects">Projects</a></li>
                <li className="articles"><a href="#articles">Articles</a></li>
                <li className="about"><a href="#about">About</a></li>
                <li className="contact"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="headerInfo">
            <h1>Tony Valkama</h1>
            <h2>Software Developer</h2>
            <h3>Eastern Finland</h3>
        </div>
    </header>
  )
}
 
export default Header;