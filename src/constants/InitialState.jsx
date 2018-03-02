export const initialState = {
  currentRecipeId: 1,
  recipesById: {
    1: {
      title: 'Potato Soup',
      image: '',
      ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
      link: 'http://www.marthastewart.com',
      recipeId: 1,
      isSaved: null
    }
  },
  user: {
    currentUserId: null,
    savedRecipes: {}
  },
};
