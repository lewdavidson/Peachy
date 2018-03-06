import React from 'react';
import { HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Home from './Components/Home';
import createRecipeReducer from './reducers/createRecipeReducer';


const store = createStore(createRecipeReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Home />
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
