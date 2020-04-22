import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <>
      <Title>Welcome</Title>
      <div className="hoodheroes-widget-container"></div>
    </>
  );
};

export default Home;
