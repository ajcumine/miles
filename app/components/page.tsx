import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ffd500;
  height: 100%;
  font-family: 'Fira Code';
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>{children}</Wrapper>
);

export default Page;
