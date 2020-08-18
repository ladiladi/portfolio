import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Footer.css';
import Projects from './../components/Projects.js';
import Articles from './../components/Articles.js';
import About from './../components/About.js';
import Contact from './../components/Contact.js';

function Footer(props) {
  return (
    <footer id="home" className="fullFooter">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <nav id="nav-wrap" className="nav-wrapper">
        <BrowserRouter>
            

            <Link to="/" className="menuItem">Projects</Link>
            <Link to="/articles" className="menuItem">Articles</Link>
            <Link to="/about" className="menuItem">About</Link>
            <Link to="/contact" className="menuItem">Contact</Link>
        </BrowserRouter>
        </nav>
        <div className="footerInfo">
            <div className="social-media">
                <a href="//github.com/ladiladi" class="fa fa-github"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="//linkedin.com/in/tony-v-55887b88" class="fa fa-linkedin"></a>
                <a href="//twitter.com/agamaha" class="fa fa-twitter"></a>
            </div>
        </div>
    </footer>
  )
}
 
export default Footer;