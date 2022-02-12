import { VFC } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

const Brand = styled.a`
  border-radius: 0 0 0.25rem 0.25rem;
  display: inline-block;
  margin-left: -0.75rem;
  padding: 1.1875rem 0.75rem 0.75rem;

  &:focus {
    background-color: ${(props) => props.theme.link};
    outline: 0 none;
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
  background-color: ${(props) => props.theme.link};
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
export const Header: VFC = () => (
  <Wrapper>
    <SkipToContent href="#content">Skip to the content</SkipToContent>
    <Container>
      <Brand href="/" rel="home">
        <img src={logo} alt="MyGov" width={64} height={23} />
      </Brand>
    </Container>
  </Wrapper>
);
