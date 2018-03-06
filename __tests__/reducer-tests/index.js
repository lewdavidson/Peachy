import initialState from './../../src/constants/initialState';
import recipeGetReducer from './../../src/reducers/recipeGetReducer';

describe('Peachy App', () => {
  test('Should return initial state', () => {
    expect(recipeGetReducer(initialState, { type: null })).toEqual(state);
  })
});
