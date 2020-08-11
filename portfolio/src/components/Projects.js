import React from "react";
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './../App.css';
import './Projects.css';
import shoppingCart from './../pictures/shopping-cart.PNG';
import recipeApp from './../pictures/recipe-app.PNG';
import quizApp from './../pictures/quiz-app.PNG';
import tetris from './../pictures/tetris.PNG';

function Projects(props) {
  return (
    <div className="projects">
        <h1>Projects</h1>
        <div className="thumbnails">
        <Thumbnail
            link="/shoppingcart"
            image={shoppingCart}
            title="Shopping Cart"
            github="https://github.com/ladiladi/js-shopping-cart"
        />

        <Thumbnail
            link="/recipeapp"
            image={recipeApp}
            title="Recipe App"
            github="https://github.com/ladiladi/react-recipe-app"
        />

        <Thumbnail
            link="/quizapp"
            image={quizApp}
            title="Quiz App"
            github="https://github.com/ladiladi/react-quiz-app"
        />

        <Thumbnail
            link="/tetris"
            image={tetris}
            title="Tetris"
            github="https://github.com/ladiladi/tetris"
        />
        </div>
    </div>
  )
}
 
export default Projects;