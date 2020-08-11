import React from "react";
import pictureTony from './../pictures/tony.jpg';
import './../App.css';
 
function About(props) {
  return (
    <div>
      <h1>About me</h1>
      <div className="photoOfMe">
        <img src={pictureTony} style={{borderRadius: "100%"}} alt="Photo" height="300" width="250"/>
      </div>

    </div>
  )
}
 
export default About;