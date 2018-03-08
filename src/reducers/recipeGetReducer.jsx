import constants from './../constants';
const { initialState, types } = constants;

const recipeGetReducer = (state = initialState, action) => {
  let newRecipeByIdStateSlice;
  let newRecipeByIdEntry;
  let newRecipeByIdSlice;
  let newCurrentrecipeId;
  switch(action.type) {
  case types.RECEIVE_RECIPE:
    newRecipeByIdEntry = {
      title: action.title,
      image: action.image,
      link: action.link,
      ingredients: action.ingredients,
      recipeId: action.recipeId
    };
    newRecipeByIdStateSlice = Object.assign({}, state);
    newRecipeByIdStateSlice.recipesById[action.recipeId] = newRecipeByIdEntry;
    return newRecipeByIdStateSlice;
  case types.ASSIGN_ID:
    newRecipeByIdSlice = Object.assign({}, state);
    newRecipeByIdSlice.currentRecipeId[action.recipeId] = newCurrentrecipeId;
    return newCurrentrecipeId;
  default:
    return state;
  }
};

export default recipeGetReducer;

// case types.REDIRECT_HOME:
//   newRedirect = true;
//   newRedirectByStateSlice = Object.assign({}. state);
//   newRedirectByStateSlice.redirect = newRedirect;
//   return newRedirectByStateSlice;
