const { initialState, types } = constants;
import constants from './../constants';
import { connect } from 'react-redux';

const createRecipeReducer = (state = initialState.currentRecipeId, action) => {
  switch(action.type) {
  case types.REQUEST_RECIPE:
    return action.newSelectedRecipeId;
  default:
    return state;
  }
};

export default connect()(createRecipeReducer);
