import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './../App.css';
import './Thumbnail.css';

function Thumbnail(props) {
    return (
        <div className="project">
            <Link to={props.link}>
                <div className="project-image">
                    <img src={props.image} alt="Project" width="300"/>
                </div>
                <div className="project-title">{props.title}</div>
            </Link>
            <Link to={props.github}>
                <div className="project-github"><b>GitHub Project Repository</b></div>
            </Link>
        </div>
    )
}

export default Thumbnail;