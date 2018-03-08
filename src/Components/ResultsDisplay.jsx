import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import likeBtn from './assets/peach1.svg';
import { connect } from 'react-redux';
import { handleNewRecipeId } from './../actions';

const ResultsDisplay = (props) => {
  // let handleNewRecipeId;
  const ingredientsArray = props.ingredients;
  const ingredientsList = ingredientsArray.map(function(ingredient, index){
    return <li key={index}>{ingredient}</li>;
  });


  function grabId (recipeId) {
    console.log(recipeId);
  //   dispatch(handleNewRecipeId(recipeId));
  }

  const imgStyle = {
    maxHeight: '150px',
    margin : '0 auto',
    width: '100%',
    objectFit: 'cover',
  };

  return (
    <div className='result-body'>
      <style jsx>{`
          .result-body {
            border: 1px solid black;
            font-family: 'Raleway', sans-serif;
            padding: 10px;
            width: 300px;
            background: white;
            max-height: 530px;
            margin-bottom: 20px;
          }
          .result-body h4 {
            text-align: center;
            margin-top: 10px;
            text-decoration: underline;
            font-size: 2em;
            color: #656839;
            max-height: 40px;
            overflow: hidden;
            line-spacing: 20px;
          }
          .result-body h4:hover {
            cursor: pointer;
          }
          .result-body ul {
            height: 100px;
            max-height: 75px;
            overflow: hidden;
            margin-bottom: 20%;
          }
          .result-body p {
            text-align: center;
            overflow: hidden;
          }
          .result-body a {
            color: #656839;
            font-weight: bold;
          }
          .likeBtn {
            height: 40px;
            width: 40px;
            float: right;
          }
      `}</style>
      <img style={imgStyle} src={props.image}></img>
      <Link to='/singleitem'><h4 onClick={grabId(props.recipeId)}>{props.title}</h4></Link>
      <p>Ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p>Visit the <a href={props.link}>full site </a>for preparation instructions</p>
      <img className='likeBtn' src={likeBtn}></img>
    </div>
  );
};


ResultsDisplay.propTypes = {
  recipe: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  ingredients: PropTypes.array,
  link: PropTypes.string,
  recipeId: PropTypes.any,
  dispatch: PropTypes.func,
};

export default connect()(ResultsDisplay);
