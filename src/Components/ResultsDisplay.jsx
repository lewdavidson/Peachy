import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { recieveRecipe } from './../actions';

const ResultsDisplay = ({recipe}) => {
  const { title, image, ingredients, link, recipeId } = recipe;
  const ingredientsArray = recipe.ingredients;
  const ingredientsList = ingredientsArray.map(function(ingredient, index){
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div>
      <img className="result-img" src={image}></img>
      <h4>{title}</h4>
      <p>Ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p>Visit the <a href={link}>full site </a>for preparation instructions</p>
      <button><Link to='/singleitem'>Show More</Link></button>
      <hr/>
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

const mapStateToProps = state => {
  let info;
  const recipe = state.recipesById[state.currentRecipeId];
  info = {
    id: state.currentRecipeId,
    title: recipe.title,
    image: recipe.image,
    ingredients: recipe.ingredients,
    link: recipe.link
  };
  return {
    recipe: info
  };
};

export default connect(mapStateToProps)(ResultsDisplay);
