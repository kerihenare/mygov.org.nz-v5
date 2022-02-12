import type { FC } from 'react';
import styled from 'styled-components';

interface TableProps {
  withParties: boolean;
}

const Wrapper = styled.table`
  border-collapse: collapse;
  font-weight: bold;
  max-width: 100%;
  width: 100%;

  td,
  th {
    padding: 0.75rem;
    text-align: right;
  }

  tbody td {
    font-weight: normal;
  }

  tbody th,
  thead th:first-child {
    text-align: left;
  }

  tbody td,
  tbody th,
  tfoot td,
  tfoot th {
    border-top: 1px solid ${(props) => props.theme.border};
  }

  tbody tr:first-child td,
  tbody tr:first-child th,
  tfoot tr:first-child td,
  tfoot tr:first-child th {
    border-top-width: 2px;
  }

  tbody tr:nth-child(odd) td,
  tbody tr:nth-child(odd) th {
    background-color: ${(props) => props.theme.tableAlt};
  }

  @media (max-width: 992px) {
    th span {
      display: none;
    }
  }
`;

const WithPartiesWrapper = styled(Wrapper)`
  @media (min-width: 576px) {
    tbody th {
      padding-left: 2.5rem;
      position: relative;

      &:before {
        background: ${(props) => props.theme.border}
          linear-gradient(0deg, rgba(0, 0, 0, 0.2), hsla(0, 0%, 100%, 0.05));
        border-radius: 0.375rem;
        box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
        content: ' ';
        height: 0.75rem;
        left: 1rem;
        margin-top: -0.375rem;
        position: absolute;
        top: 50%;
        width: 0.75rem;
      }
    }
  }
`;

/**
 *
 * @param props
 */
export const Table: FC<TableProps> = (props) => {
  return props.withParties ? (
    <WithPartiesWrapper>{props.children}</WithPartiesWrapper>
  ) : (
    <Wrapper>{props.children}</Wrapper>
  );
};
