import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './Components/App';
import createRecipeReducer from './reducers';

const store = createStore(createRecipeReducer);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>,
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./Components/App', () => {
    render(App);
  });
}
/*eslint-enable */
