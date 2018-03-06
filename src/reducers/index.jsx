import { combineReducers } from 'redux';
import recipeGetReducer from './recipeGetReducer';
import createRecipeReducer from './createRecipeReducer';

const rootReducer = combineReducers({
  currentRecipeId: recipeGetReducer,
  recipesById: createRecipeReducer
});

export default rootReducer;
