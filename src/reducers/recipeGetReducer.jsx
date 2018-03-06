import constants from './../constants';
const { initialState, types } = constants;

const recipeGetReducer = (state = initialState, action) => {
  let newRecipeByIdStateSlice;
  let newRecipeByIdEntry;
  switch(action.type) {
  case types.RECEIVE_RECIPE:
    newRecipeByIdEntry = Object.assign({}, state.recipesById, {
      title: action.title,
      image: action.image,
      link: action.link,
      ingredients: action.ingredients,
      recipeId: action.recipeId
    });
    console.log(initialState);
    console.log(newRecipeByIdEntry);
    // newRecipeByIdStateSlice = Object.assign({}, state.recipesById, {
    //   [action.recipeId]: newRecipeByIdEntry
    // });
    return newRecipeByIdEntry;
  default:
    return state;
  }
};

export default recipeGetReducer;
