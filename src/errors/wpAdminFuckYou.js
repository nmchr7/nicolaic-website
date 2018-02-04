import React from 'react';

import SEO from '../util/seo';

import notFoundImg from '../assets/fuck-off.png';

const NotFound = () => (
  <div className="nicolaic-page">
    <SEO
      schema="WebPage"
      title="NOT FOUND"
      description="Development in progress - This will be my Home page"
    />
    <div style={{
display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
}}
    >
      <img src={notFoundImg} alt="not.-found" />
      <h1 style={{ textAlign: 'center' }} >Wordpress ... seriously!?!</h1>
    </div>
  </div>
);

export default NotFound;
