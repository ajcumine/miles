import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: black;
  color: yellow;
  flex-shrink: 0;
  height: 4.8rem;
  padding: 1.2rem;
  overflow: hidden;
`;

const Footer = () => (
  <FooterWrapper>
    <p>github</p>
    <p>twitter</p>
    <p>twitch</p>
  </FooterWrapper>
);

export default Footer;
