import React from "react";
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import shoppingCart from './pictures/shopping-cart.PNG';
import recipeApp from './pictures/recipe-app.PNG';
import quizApp from './pictures/quiz-app.PNG';

function Projects(props) {
  return (
    <div>
        <h1>Projects</h1>
        <Thumbnail
            link="/shoppingcart"
            image={shoppingCart}
            title="Shopping Cart"
            category="Web App"
        />

        <Thumbnail
            link="/recipeapp"
            image={recipeApp}
            title="Recipe App"
            category="React App"
        />

        <Thumbnail
            link="/quizapp"
            image={quizApp}
            title="Quiz App"
            category="React App"
        />
    </div>
  )
}
 
export default Projects;