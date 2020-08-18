import React from "react";
import pictureTony from './../pictures/tony.jpg';
import './../App.css';
import './About.css';
 
function About(props) {
  return (
    <div>
      <h1>About me</h1>
      <div className="photoOfMe">
        <img src={pictureTony} style={{borderRadius: "100%"}} alt="Photo" height="300" width="250"/>
      </div>
      <div className="textColumns">
        <div className="wallOfText">
          <h4>I am currently studying in University of Eastern Finland and planning to graduate to Master of Science by Christmas 2020.</h4>
          <h4>Living in Kuopio, from Joensuu.</h4>
          <h4>I seek to become a full stack developer, I want to develop web projects and I am currently studying MERN stack (MongoDB, Express, React, Node.JS).</h4>
          <h4>I enjoy sports, especially martial arts.</h4>
          <h4>Other hobbies include programming, video games and board games.</h4>
          <h4>I also have two cats.</h4>
        </div>
        <div className="studies">
          <h2>Studies</h2>
          <h3>Master of Science</h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Pattern Recognition</li>
            <li>User Centered Design</li>
            <li>Research Methods in Computer Science</li>
            <li>Advanced English Academic and Professional Communication for Applied Physics, Computer Science and Environmental Science</li>
            <li>Designing Smart Learning Environments</li>
            <li>Software Engineering</li>
            <li>Deep Learning</li>
            <li>Learning Analytics</li>
            <li>Visual Web Development</li>
            <li>Introduction to Architectural Design in Software Engineering</li>
            <li>State-of-Art Technologies in Digital Learning Environments</li>
          </ul>
          <h3>Bachelor of Science</h3>
        </div>
      </div>
    </div>
  )
}
 
export default About;