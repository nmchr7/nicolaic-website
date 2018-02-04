import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue100, blue700 } from 'material-ui/styles/colors';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { routes, RouteWithSubRoutes } from './routes';

import Layout from './layout';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue700,
    primary2Color: blue700,
    primary3Color: blue100,
  },
});

const App = () => (
  <Router>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Layout>
        <Switch>
          {routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </Layout>
    </MuiThemeProvider>
  </Router>
);

export default App;
