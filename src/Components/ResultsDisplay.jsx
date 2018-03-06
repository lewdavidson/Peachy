import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import likeBtn from './assets/peach1.svg';

const ResultsDisplay = (props) => {
//   const { title, image, ingredients, link, recipeId } = recipe;
  const ingredientsArray = props.ingredients;
  const ingredientsList = ingredientsArray.map(function(ingredient, index){
    return <li key={index}>{ingredient}</li>;
  });

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
          }
          .result-body h4 {
            text-align: center;
            margin-top: 10px;
            text-decoration: underline;
            font-size: 2em;
            color: #656839;
          }
          .result-body h4:hover {
            cursor: pointer;
          }
          .result-body ul {
            height: 100px;
            margin-bottom: 30px;
          }
          .result-body p {
            text-align: center;
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
      <img className="result-img" src={props.image}></img>
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


ResultsDisplay.propTypes = {
  recipe: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  ingredients: PropTypes.array,
  link: PropTypes.string,
  key: PropTypes.string,
  itemId: PropTypes.string,
};

// const mapStateToProps = state => {
//   let info;
//   const recipe = state.recipesById[state.currentRecipeId];
//   info = {
//     id: state.currentRecipeId,
//     title: recipe.title,
//     image: recipe.image,
//     ingredients: recipe.ingredients,
//     link: recipe.link
//   };
//   return {
//     recipe: info
//   };
// };

export default connect()(ResultsDisplay);
