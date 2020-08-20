import React from "react";
import Thumbnail from './Thumbnail.js';
import './Articles.css';
import epicGamesStore from '../pictures/epic-games-store-logo.jpg';
 
function Articles(props) {
  return (
    <div className="articles-wrapper">
      <h1>Articles</h1>

      <Thumbnail
            link="//github.com/ladiladi/ucd2020"
            image={epicGamesStore}
            title="Menu comparisons and designs solutions - case EGS."
            github="//github.com/ladiladi/ucd2020"
      />
    </div>
  )
}
 
export default Articles;