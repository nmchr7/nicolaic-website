import React from 'react';
import { NextPage } from 'next';

const Contact: NextPage = () => <p>I be contact page</p>;

Contact.getInitialProps = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 500);
  });
  return {};
};

export default Contact;
