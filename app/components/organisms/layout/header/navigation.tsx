import type { VFC } from 'react';
import { NavLink } from 'remix';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    padding-left: 2px;
  }

  a {
    border-radius: 0.25rem;
    color: ${(props) => props.theme.headerLink};
    display: inline-block;
    font-size: 0.92rem;
    font-weight: 600;
    letter-spacing: 0.02857em;
    line-height: 1;
    padding: 0.75rem;
    text-transform: uppercase;
  }

  a:focus,
  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
    outline: 0;
    text-decoration: none;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
`;

/**
 *
 */
export const Navigation: VFC = () => (
  <Wrapper>
    <li>
      <NavLink to="/election-results">Election results</NavLink>
    </li>
    <li>
      <NavLink to="/tools">Tools</NavLink>
    </li>
  </Wrapper>
);
