import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DetailsPage from './containers/DetailsPage';

export default () => (
  <App>
    <Router>
      <div>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.NOTES} component={DetailsPage} />
      </div>
    </Router>
  </App>
);
