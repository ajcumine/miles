import Page from 'components/page';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Home = () => (
  <Page>
    <div>
      <Title>Andrew Cumine</Title>
      <h3>Full Stack Software Engineer</h3>
    </div>
    <div>
      Footer
      <p>github</p>
      <p>twitter</p>
      <p>twitch</p>
    </div>
  </Page>
);

export default Home;
