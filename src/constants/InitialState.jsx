export const initialState = {
  currentRecipeId: 1,
  recipesById: {
    1: {
      title: 'Potato Soup',
      image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
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
