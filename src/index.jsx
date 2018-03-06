import React from 'react';
import { HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import recipeGetReducer from './reducers/recipeGetReducer';
import Home from './Components/Home';


const store = createStore(recipeGetReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Home />
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
