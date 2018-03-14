# Peachy
#### by Lew Davidson

### A vegan recipe resource

### Project Description:

> A vegan recipe website that allows users to search recipes using keywords to return results. Eventual functionality will include: the ability to create an account, save and share recipes across social media, and use recipes to create a grocery list.

### Setup Instructions:
* copy (this repo link)[https://github.com/lewdavidson/Peachy.git]
* $ cd Desktop
* $ git clone (repo link)
* $ cd Peachy
* $ npm install
* $ npm run start
* open http://localhost8080/ in a browser of your choice

### M.V.P Features:

~ Search recipes by keyword

~ Display 10 results per page

### Tools, Libraries, Frameworks, Languages to be used:

~ [The Edamam API](https://developer.edamam.com/edamam-docs-recipe-api) for pulling the
needed information to search and use on the page.

~ I will be using JavaScript, React, Redux, and CSS

#### If MVP is achieved, the additional features I would like to add are:

~ User authentication to create a unique account per user

~ The ability to publish recipes to a user’s social media page from the app.

~ The ability for users to cross off ingredients that they have / recipe steps that they have already completed.

~ The ability for a user to save recipes that they have liked or made.

~ The ability to export an ingredient list to a notes section for easy grocery shopping.

#### The additional tools required to achieve these features are:
~ Twitter/ Facebook tools for pushing information to a users social media account.

~ Firebase for user authentication.

 ___

### State Slices/Structure:

There need to be a few state slices in order for my app to work. I am thinking that every recipe needs a unique id and needs to be nested inside a recipes object, a current recipe id in order to show individual recipes at a time, and a current user id slice which is originally set to null and then changed if a user is logged in. SavedRecipes slice, holds all recipes that isSaved = true.

initialState = {  
  user: {  
    currentUserId: null,    
    savedRecipes: {}  
  },  
  currentRecipeId: 1,  
  recipesById: {  
    1: {  
    title: 'title',  
      image: 'image',  
      ingredients: ['ingredients'],  
      link: 'link',  
      recipeId: 1,  
      isSaved: null  
    }  
  }   
};

#### State flow:
If currentUserId is not null, redirect to user dash.

If currentUserId is null, redirect to main page.

No matter what UserId is, display recipes 1-10 on either user dash or main page on search.

If currentUserId is not null and save button is clicked, isSaved flips to true.

If isSaved is true, put into savedRecipes, display those recipe ids on the saved page.

If save button is pressed again, isSaved is null, remove from savedRecipes.

#### Lifting State:

I have determined that State needs to live in the Home component. This is where the user reaches a "fork in the road", either log in/ sign up or proceed to search as a guest. Home is the closest common parent to those two "forks" and therefore should be my stateful component.


### Data Flow Map:

![data map](DataFlow.jpg)
___

### To-Do:

 Using the [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) article, begin building the site using these steps:

### Break UI into a component hierarchy

[x] Build a plan for UI, what it will do, how it will look. "What do I want my user experience to feel like?"

[x] Create mock-up of that UI, thinking about routes to use and where and what will appear on which pages.

[x] Draw out component structure based on UI mock-up

[x] Add mockup and component tree to planning repo

### Build A Static Version

[x] Using component Structure, build out a static version of the site. (Hard code anything coming in from outside sources).

[x] Add link to static site's repo to this planning document

### Identify minimum complete representation of UI state

[x] Consider how state will be organized

[x] Outline any state slices needed and how they will be structured

[x] Add a list of state slices this site requires AND how they will be structured to this document.

### Identify where state should live (lift state)

[x] Determine WHERE state needs to live

[x] Add a section to this document detailing where state will be lifted to.

[x] Refactor existing components to include state and state values (don't worry about redux quite yet). Basically add state to the site.


### Inverse Data Flow

[ ] Integrate all backend logic into the UI (there will be considerably more detailed steps to this process)
