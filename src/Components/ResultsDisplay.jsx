import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ResultsDisplay = ({recipe}) => {
  const { title, image, ingredients, link, recipeId } = recipe;
  const ingredientsArray = recipe.ingredients;
  const ingredientsList = ingredientsArray.map(function(ingredient, id){
    return <li key={id}>{ingredient}</li>;
  })

  return (
    <div>
      <img src={recipe.image}></img>
      <h4>{recipe.title}</h4>
      <p>Ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p>Visit the <a href={recipe.link}>full site</a>for preparation instructions</p>
      <button><Link to='/singleitem'>Show More</Link></button>
      <hr/>
    </div>
  );
};

ResultsDisplay.propTypes = {
  recipe: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  instructions: PropTypes.array,
  link: PropTypes.string,
  key: PropTypes.string,
  itemId: PropTypes.string,
  onSelectedRecipe: PropTypes.any
};


export default connect()(ResultsDisplay);
