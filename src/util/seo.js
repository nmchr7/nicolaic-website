/* eslint-disable react/require-default-props, react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import seoImageURL from '../assets/fiber.jpg';

const seoURL = path => `https://nicolaic.com${path}`;

const getMetaTags = ({
  title,
  description,
  url,
  contentType,
  published,
  updated,
  category,
  tags,
}) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: seoImageURL },
    { name: 'description', content: description },
    { name: 'og:title', content: `${title} | nicolaic` },
    { name: 'og:type', content: contentType },
    { name: 'og:url', content: url },
    { name: 'og:image', content: seoImageURL },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: 'nicolaic' },
    // { name: 'fb:app_id', content: '1645952115430593' }, TODO:
  ];

  if (published) {
    metaTags.push({ name: 'article:published_time', content: published });
  }
  if (updated) {
    metaTags.push({ name: 'article:modified_time', content: updated });
  }
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });

  return metaTags;
};

const SEO = ({
  schema,
  title,
  description,
  path,
  contentType,
  published,
  updated,
  category,
  tags,
  twitter,
}) => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`,
    }}
    title={title}
    link={[{ rel: 'canonical', href: seoURL(path) }]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      url: seoURL(path),
      published,
      updated,
      category,
      tags,
      twitter,
    })}
  />
);

SEO.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  contentType: PropTypes.string,
  published: PropTypes.string,
  updated: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.array,
  twitter: PropTypes.string,
};

export default SEO;
