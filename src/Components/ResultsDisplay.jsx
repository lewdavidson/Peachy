import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { recieveRecipe } from './../actions';

const ResultsDisplay = (props) => {
//   const { title, image, ingredients, link, recipeId } = recipe;
  const ingredientsArray = props.ingredients;
  console.log('image', props.image);
  const ingredientsList = ingredientsArray.map(function(ingredient, index){
    return <li key={index}>{ingredient}</li>;
  });
  console.log(ingredientsList);

  return (
    <div className='result-body'>
      <style jsx>{`
          .result-body {
            border: 1px solid black;
          }
      `}</style>
      <img className="result-img" src={props.image}></img>
      <h4>{props.title}</h4>
      <p>Ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p>Visit the <a href={props.link}>full site </a>for preparation instructions</p>
      <button><Link to='/singleitem'>Show More</Link></button>
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
