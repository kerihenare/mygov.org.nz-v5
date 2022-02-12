import { VFC } from 'react';
import styled from 'styled-components';

interface PageHeaderProps {
  description?: string;
  title: string;
}

const Wrapper = styled.header`
  h1 {
    border-bottom: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.link};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin: -0.4375rem 0 0;
    padding: 0 0 0.6875rem;
  }

  p {
    margin: 0;
    padding: 1.25rem 0;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;

/**
 *
 * @param props
 */
export const PageHeader: VFC<PageHeaderProps> = (props) => (
  <Wrapper>
    <h1>{props.title}</h1>
    {props.description && <p>{props.description}</p>}
  </Wrapper>
);
