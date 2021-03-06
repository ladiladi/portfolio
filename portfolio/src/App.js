import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <div className="navigation-top">

            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>

          </div>
        </div>
        <Header />
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
