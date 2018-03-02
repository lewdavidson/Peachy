const { initialState, types } = constants;
import constants from './../constants';


const createRecipeReducer = (state = initialState.currentRecipeId, action) => {
  switch(action.type) {
  case types.REQUEST_RECIPE:
    return action.newSelectedRecipeId;
  default:
    return state;
  }
};

export default createRecipeReducer;
