import constants from './../constants';
const { types } = constants;
import v4 from 'uuid/v4';

export const addRecipe = (title, image, link, ingredients, recipeId) => ({
  type: types.RECEIVE_RECIPE,
  title,
  image,
  link,
  ingredients,
  recipeId,
});

export const changeRoute = () => ({
  type: types.REDIRECT_HOME,
});

export const assignNewRecipeId = (recipeId) => ({
  type: types.ASSIGN_ID,
  recipeId,
});

export function handleNewRecipeId(recipeId) {
  return function(dispatch) {
    dispatch(assignNewRecipeId(recipeId));
  };
}

export function fetchRecipe(title) {
  return function(dispatch) {
    title = title.split(' ').join('_');
    return fetch('https://api.edamam.com/search?q=' + title + '&app_id=12fbe57b&app_key=5e0a825d7ea3696581d2b4d757c4b747&health=vegan').then(
      response => response.json(),
      error => alert('error message: ', error)
    ).then(function(json){
      if (json.hits.length > 0) {
        for (let i = 0; i < 10; i++) {
          const title = json.hits[i].recipe.label;
          const image = json.hits[i].recipe.image;
          const link = json.hits[i].recipe.url;
          const ingredients = json.hits[i].recipe.ingredientLines;
          const recipeId = v4();
          dispatch(addRecipe(title, image, link, ingredients, recipeId));
        }
      } else {
        alert('no recipes found');
      }
    });
  };
}


// export function routeHome() {
//   if (this.state.redirect) {
//     return(
//       <Redirect to='/results'/>
//     );
//   }
// }
