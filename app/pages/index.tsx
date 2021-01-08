import Footer from 'components/footer';
import HeaderImage from 'components/header-image';
import InfoPanel from 'components/info-panel';
import Page from 'components/page';
import React from 'react';
import styled from 'styled-components';
import styles from 'styles/variables';

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  padding: 0 1.6rem;

  @media (min-width: ${styles.size.tablet}) {
    max-width: 90rem;
    margin 0 auto;
    width: 100%;
  }

  @media (min-width: ${styles.size.desktop}) {
    max-width: 110rem;
  }
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
