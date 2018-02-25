import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { routes, RouteWithSubRoutes } from './routes';

import Layout from './layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>{routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}</Switch>
    </Layout>
  </Router>
);

export default App;
