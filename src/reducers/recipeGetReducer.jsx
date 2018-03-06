import constants from './../constants';
const { initialState, types } = constants;

const recipeGetReducer = (state = initialState, action) => {
  let newRecipeByIdStateSlice;
  let newRecipeByIdEntry;
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
    console.log(newRecipeByIdStateSlice);
    return newRecipeByIdStateSlice;
  default:
    return state;
  }
};

export default recipeGetReducer;
