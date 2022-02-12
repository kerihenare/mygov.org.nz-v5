import type { VFC } from 'react';
import styled from 'styled-components';

import { Container } from '~/components/atoms/container';

const Wrapper = styled.footer`
  align-items: center;
  background-color: ${(props) => props.theme.footerBackground};
  display: flex;
  justify-content: center;
  padding: 1rem 0 1.25rem;
  text-align: center;

  a {
    color: ${(props) => props.theme.footerLink};
    transition: color 1s ease;
  }

  a:focus,
  a:hover {
    color: ${(props) => props.theme.footerLinkHover};
    outline: 0 none;
    text-decoration: none;
    transition: color 0.25s ease;
  }
`;

/**
 *
 */
export const Footer: VFC = () => (
  <Wrapper>
    <Container>
      <a href="https://mygov.org.nz">mygov.org.nz</a>
    </Container>
  </Wrapper>
);
