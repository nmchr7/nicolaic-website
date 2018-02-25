import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => (
  <div
    style={{
      paddingRight: 20,
      backgroundColor: '#333',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }}
  >
    <Link style={{ margin: 5 }} to="/">
      <p style={{ color: 'white' }}>Home</p>
    </Link>

    <Link style={{ margin: 5 }} to="/about">
      <p style={{ color: 'white' }}>About</p>
    </Link>
  </div>
);

export default Menu;
