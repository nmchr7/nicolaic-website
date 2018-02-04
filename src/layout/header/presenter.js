import React from 'react';
import AppBar from 'material-ui/AppBar';

import Menu from './menu/presenter';

const Header = () => (
  <AppBar
    title="nicolaic"
    iconElementLeft={<div />}
    iconElementRight={<Menu />}
  />
);

export default Header;
