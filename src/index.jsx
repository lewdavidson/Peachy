import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './Components/App';
import createRecipeReducer from './reducers/createRecipeReducer';

const store = createStore(createRecipeReducer);

ReactDOM.render(
  <AppContainer>
    <HashRouter>
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    </HashRouter>
  </AppContainer>,
  document.getElementById('react-app-root')
);


/*eslint-disable */
if (module.hot) {
  module.hot.accept('./Components/App', () => {
    render(App);
  });
}
/*eslint-enable */
