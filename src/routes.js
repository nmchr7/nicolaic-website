import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home/presenter';
import About from './about/presenter';
import wpFuckOff from './errors/wpAdminFuckYou';
import NotFound from './errors/notFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/wp-admin',
    exact: true,
    component: wpFuckOff,
  },
  {
    path: '*',
    component: NotFound,
  },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export { routes, RouteWithSubRoutes };
