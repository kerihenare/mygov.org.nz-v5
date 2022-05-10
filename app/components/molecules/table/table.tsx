import type { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface TableProps {
  children: ReactNode;
}

export const Wrapper = styled.table`
  background-color: ${(props) => props.theme.tableBackground};
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
    background-color: ${(props) => props.theme.tableAltBackground};
  }

  tr[data-href] td {
    cursor: pointer;
  }

  tr[data-href] th {
    color: ${(props) => props.theme.link};
    cursor: pointer;
  }

  tbody tr[data-href]:focus td,
  tbody tr[data-href]:hover td,
  tbody tr[data-href]:focus th,
  tbody tr[data-href]:hover th {
    background-color: ${(props) => props.theme.tableHover};
  }

  tbody tr[data-href]:nth-child(odd):focus td,
  tbody tr[data-href]:nth-child(odd):hover td,
  tbody tr[data-href]:nth-child(odd):focus th,
  tbody tr[data-href]:nth-child(odd):hover th {
    background-color: ${(props) => props.theme.tableAltHover};
  }

  @media (max-width: 992px) {
    th span {
      display: none;
    }
  }
`;

/**
 *
 * @param props
 */
export const Table: FC<TableProps> = (props) => (
  <Wrapper>{props.children}</Wrapper>
);
