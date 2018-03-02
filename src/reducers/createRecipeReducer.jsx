const { initialState } = constants;
import constants from './../constants';

const createRecipeReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.REQUEST_RECIPE:
  };
  return state;
};

export default createRecipeReducer;
