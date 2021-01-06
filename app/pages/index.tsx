import Footer from 'components/footer';
import HeaderImage from 'components/header-image';
import InfoPanel from 'components/info-panel';
import Page from 'components/page';
import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  flex: 1 0 auto;
`;

const Home = () => (
  <Page>
    <ContentWrapper>
      <HeaderImage />
      <InfoPanel />
    </ContentWrapper>
    <Footer />
  </Page>
);

export default Home;
