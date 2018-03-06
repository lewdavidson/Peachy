import constants from './../constants';
const { initialState, types } = constants;

const recipeGetReducer = (state = initialState.recipesById, action) => {
  let newRecipeByIdStateSlice;
  let newRecipeByIdEntry;
  switch(action.type) {
  case types.RECIEVE_RECIPE:
    newRecipeByIdEntry = Object.assign({}, state[action.recipeId], {
      isFetching: false,
      title: action.title,
      image: action.image,
      link: action.link,
      ingredients: action.ingredients,
      recipeId: action.recipeId
    });
    newRecipeByIdStateSlice = Object.assign({}, state, {
      [action.recipeId]: newRecipeByIdEntry
    });
    newRecipeByIdStateSlice[action.recipeId] = action.recipe;
    return newRecipeByIdStateSlice;
  default:
    return state;
  }
};

export default recipeGetReducer;

//
// const recipeGetReducer = (state = initialState.currentRecipeId, action) => {
//   switch(action.type) {
//   case types.CHANGE_RECIPE:
//     return action.newSelectedRecipeId;
//   default:
//     return state;
//   }
// };
//

//   case types.REQUEST_RECIPE:
//     newRecipeByIdEntry = {
//       isFetching: true,
//       title: action.title,
//       recipeId: action.recipeId
//     };
//     newRecipeByIdStateSlice = Object.assign({}, state, {
//       [action.recipeId]: newRecipeByIdEntry
//     });
//     return newRecipeByIdStateSlice;
//
