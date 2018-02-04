import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';

const Menu = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Link to="/">
      <RaisedButton
        style={{
          margin: 10,
        }}
        label="Home"
        primary
      />
    </Link>

    <Link to="/about">
      <RaisedButton label="About" primary />
    </Link>
  </div>
);

export default Menu;
