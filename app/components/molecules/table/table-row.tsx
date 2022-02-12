import { FC } from 'react';
import styled from 'styled-components';

interface TableRowProps {
  success?: boolean;
}

const Success = styled.tr`
  td,
  th {
    background-color: ${(props) => props.theme.success};
  }

  &:nth-child(odd) td,
  &:nth-child(odd) th {
    background-color: ${(props) => props.theme.successAlt};
  }
`;

/**
 *
 * @param props
 */
export const TableRow: FC<TableRowProps> = (props) => {
  if (!props.success) {
    return <tr>{props.children}</tr>;
  }

  return <Success>{props.children}</Success>;
};
