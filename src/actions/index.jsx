import * as types from './../constants/ActionTypes';
import constants from './../constants';
import v4 from 'uuid/v4';

export const receiveRecipe = (title, localRecipeId) => ({
  type: types.RECEIVE_RECIPE,
  title,
  recipeId: localRecipeId
});

//will need some sort of change recipe action to pull up individual recipes at a time.

// export const receiveRecipe = (recipeFromFirebase) => {
//   return {
//     type: types.RECEIVE_RECIPE,
//     recipe: recipeFromFirebase
//   };
// };
//will eventually handle retreiving recipes from firebase

// export function addRecipe(title, image, link, ingredients) {
//   return () => recipes.push({
//     title: title,
//     image: image,
//     link: link,
//     ingredients: ingredients
//   });
// };

//will eventually add recipes to firebase

// export function watchFirebase(title) {
//   return function(dispatch) {
//     recipes.on('child_added', data =>{
//       const newRecipe = Object.assign({}, data.val(),{
//         id: data.getKey()
//       });
//       dispatch(receiveRecipe(newRecipe));
//     });
//   }
// }

//will eventaully  watch firebase to update once recipe is added.

export function fetchRecipe(title) {
  return function(dispatch) {
    const localRecipeId = v4();
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
          dispatch(addRecipe(title, image, link, ingredients));
        }
      } else {
        alert('no recipes found');
      }
    });
  };
}
