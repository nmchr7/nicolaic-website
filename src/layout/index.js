import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/presenter';
import Footer from './footer/presenter';
import UnderConstruction from './underConstruction';

const Layout = ({ children }) => (
  <div>
    <Header />
    <UnderConstruction />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
