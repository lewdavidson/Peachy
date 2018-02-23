import React from 'react';
import App from './Components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
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
