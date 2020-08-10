import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import Contact from './Contact.js';
import Header from './Header.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <div className="navigation">
          <div className="navigation-sub">

            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
