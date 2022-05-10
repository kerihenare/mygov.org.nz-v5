import { FC, ReactNode, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TableRowProps {
  children: ReactNode;
  to?: string;
  success?: boolean;
}

const SuccessRow = styled.tr`
  table tbody & td,
  table tbody & th {
    background-color: ${(props) => props.theme.success};
  }

  table tbody &:nth-child(odd) td,
  table tbody &:nth-child(odd) th {
    background-color: ${(props) => props.theme.successAlt};
  }
`;

/**
 *
 * @param props
 */
export const TableRow: FC<TableRowProps> = (props) => {
  const navigate = useNavigate();

  const onClick = useMemo(() => {
    return props.to ? () => navigate(props.to as string) : undefined;
  }, [props.to, navigate]);

  if (props.to) {
    return props.success ? (
      <SuccessRow data-href={props.to} onClick={onClick}>
        {props.children}
      </SuccessRow>
    ) : (
      <tr data-href={props.to} onClick={onClick}>
        {props.children}
      </tr>
    );
  }

  return props.success ? (
    <SuccessRow>{props.children}</SuccessRow>
  ) : (
    <tr>{props.children}</tr>
  );
};
