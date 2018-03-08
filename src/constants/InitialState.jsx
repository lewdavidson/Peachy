export const initialState = {
  currentRecipeId: null,
  recipesById: {
    1: {
      title: 'Potato Soup',
      image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
      ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
      link: 'http://www.marthastewart.com',
      recipeId: 1,
      isSaved: null
    },
    2: {
      title: 'Asparagus',
      image: 'https://www.simplyrecipes.com/wp-content/uploads/2015/04/roasted-asparagus-horiz-a-1600.jpg',
      ingredients: ['asparagus', 'olive oil', 'kosher salt','asparagus', 'olive oil', 'kosher salt'],
      link: 'http://www.bonapetit.com',
      recipeId: 2,
      isSaved: null
    },
    3: {
      title: 'Curry',
      image: 'http://img.taste.com.au/pnO-8M1c/taste/2017/04/lamb-pumpkin-curry-1980x1320-125826-1.jpg',
      ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
      link: 'http://www.marthastewart.com',
      recipeId: 3,
      isSaved: null
    },
    // 4: {
    //   title: 'Potato Soup',
    //   image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
    //   ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
    //   link: 'http://www.marthastewart.com',
    //   recipeId: 1,
    //   isSaved: null
    // },
    // 5: {
    //   title: 'Asparagus',
    //   image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
    //   ingredients: ['asparagus', 'olive oil', 'kosher salt','asparagus', 'olive oil', 'kosher salt'],
    //   link: 'http://www.bonapetit.com',
    //   recipeId: 2,
    //   isSaved: null
    // },
    // 6: {
    //   title: 'Curry',
    //   image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
    //   ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
    //   link: 'http://www.marthastewart.com',
    //   recipeId: 3,
    //   isSaved: null
    // },
    // 7: {
    //   title: 'Potato Soup',
    //   image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
    //   ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
    //   link: 'http://www.marthastewart.com',
    //   recipeId: 1,
    //   isSaved: null
    // },
    // 8: {
    //   title: 'Asparagus',
    //   image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
    //   ingredients: ['asparagus', 'olive oil', 'kosher salt','asparagus', 'olive oil', 'kosher salt'],
    //   link: 'http://www.bonapetit.com',
    //   recipeId: 2,
    //   isSaved: null
    // },
    // 9: {
    //   title: 'Curry',
    //   image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
    //   ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
    //   link: 'http://www.marthastewart.com',
    //   recipeId: 3,
    //   isSaved: null
    // },
    // 10: {
    //   title: 'Potato Soup',
    //   image: 'https://images-gmi-pmc.edge-generalmills.com/7b91ddd7-cc7e-4855-a2da-b13eac4d906a.jpg',
    //   ingredients: ['leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth','leeks', 'onions', 'potatoes', 'coconut cream', 'vegetable broth'],
    //   link: 'http://www.marthastewart.com',
    //   recipeId: 1,
    //   isSaved: null
    // },
  },
  redirect: false,
  user: {
    currentUserId: null,
    savedRecipes: {}
  },
};
