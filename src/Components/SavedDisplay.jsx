import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import likeBtn from './assets/peach1.svg';


const SavedDisplay = (props)  => {
  const ingredientsArray = props.ingredients;
  const ingredientsList = ingredientsArray.map(function(ingredient, index){
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div className='saved-body'>
      <style jsx>{`
        .saved-body {
          border: 1px solid black;
          font-family: 'Raleway', sans-serif;
          padding: 10px;
          width: 300px;
          background: white;
          max-height: 530px;
          margin-bottom: 20px;
        }
        .saved-body h4 {
          text-align: center;
          margin-top: 10px;
          text-decoration: underline;
          font-size: 2em;
          color: #656839;
        }
        .saved-body h4:hover {
          cursor: pointer;
        }
        .saved-body ul {
          height: 100px;
          max-height: 75px;
          overflow: hidden;
          margin-bottom: 20%;
        }
        .saved-body p {
          text-align: center;
        }
        .saved-body a {
          color: #656839;
          font-weight: bold;
        }
        .likeBtn {
          height: 40px;
          width: 40px;
          float: right;
        }
      `}</style>
      <img className="saved-img" src={props.image}></img>
      <Link to='/singleitem'><h4>{props.title}</h4></Link>
      <p>Ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p>Visit the <a href={props.link}>full site </a>for preparation instructions</p>
      <img className='likeBtn' src={likeBtn}></img>
    </div>
  );
};


SavedDisplay.propTypes = {
  image: PropTypes.string,
  ingredients: PropTypes.array,
  title: PropTypes.string,
  link: PropTypes.string,
  itemId: PropTypes.string
};

export default SavedDisplay;
