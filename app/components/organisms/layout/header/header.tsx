import type { FC } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import { Navigation } from './navigation';

const Brand = styled.a`
  display: inline-block;
  margin-left: -0.75rem;
  padding: 1.1875rem 0.75rem 0.75rem;

  &:focus {
    background-color: ${(props) => props.theme.headerText};
    outline: 0 none;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
    outline: 0;
  }
`;

const Container = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 576px) {
    padding: 0 1.5rem;
  }
`;

const SkipToContent = styled.a`
  background-color: ${(props) => props.theme.headerText};
  border: 0;
  clip: rect(0, 0, 0, 0);
  color: ${(props) => props.theme.headerLink};
  display: block;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 1rem;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  width: 1px;

  &:active,
  &:focus {
    clip: auto;
    height: auto;
    left: 0;
    margin: 0;
    outline: 0;
    overflow: visible;
    right: 0;
    text-decoration: none;
    top: 0;
    white-space: inherit;
    width: auto;
  }
`;

const Wrapper = styled.header`
  background-color: ${(props) => props.theme.headerBackground};
`;

/**
 *
 */
export const Header: FC = () => (
  <Wrapper>
    <SkipToContent href="#content">Skip to the content</SkipToContent>
    <Container>
      <Brand href="/" rel="home">
        <img src={logo} alt="MyGov" width={64} height={23} />
      </Brand>
      <Navigation />
    </Container>
  </Wrapper>
);
