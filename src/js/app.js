import React from 'react';

import ReactDOM from 'react-dom';
import {
  HashRouter,
  withRouter
} from 'react-router-dom';

import App from './containers/App';

const AppContainer = withRouter(props => <App {...props} />);
ReactDOM.render((
  <HashRouter>
    <AppContainer/>
  </HashRouter>
), document.getElementById('root'));
