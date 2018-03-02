import * as types from './../constants/ActionTypes';
import constants from './../constants';

export const requestRecipe = (title, localRecipeId) => ({
  type: types.REQUEST_RECIPE,
  title,
  recipeId: localRecipeId
});

export function fetchRecipe(title) {
  return function(dispatch) {
    title = title.split(' ').join('_');
    return fetch('https://api.edamam.com/search?q=' + title + '&app_id=12fbe57b&app_key=5e0a825d7ea3696581d2b4d757c4b747&health=vegan').then(
      response => response.json(),
      error => console.log('error message: ', error)
    ).then(function(json){
      if (json.hits.length > 0) {
        for (let i = 0; i < 10; i++) {
          const title = json.hits[i].recipe.label;
          const image = json.hits[i].recipe.image;
          const link = json.hits[i].recipe.url;
          const ingredients = json.hits[i].recipe.ingredientLines;
          dispatch(addRecipe(title, image, link, ingredients));
        }
      } else {
        console.log('no recipes found');
      }
    });
  };
}
