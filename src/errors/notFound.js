import React from 'react';

import SEO from '../util/seo';

import notFoundImg from '../assets/not-found.png';

const NotFound = () => (
  <div className="nicolaic-page">
    <SEO
      schema="WebPage"
      title="NOT FOUND"
      description="Development in progress - This will be my Home page"
    />
    <div style={{ flexDirection: 'column' }}>
      <img src={notFoundImg} alt="not.-found" />
      <h1 style={{ textAlign: 'center' }} >Oh no ... its a 404</h1>
    </div>
  </div>
);

export default NotFound;
