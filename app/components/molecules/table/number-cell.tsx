import { useMemo, VFC } from 'react';
import styled from 'styled-components';

interface NumberCellProps {
  negative?: boolean;
  positive?: boolean;
  style?: 'currency' | 'decimal' | 'percent' | 'unit';
  value: number;
}

const Negative = styled.td`
  color: ${(props) => props.theme.negative};
`;

const Positive = styled.td`
  color: ${(props) => props.theme.positive};
`;

/**
 *
 * @param props
 */
export const NumberCell: VFC<NumberCellProps> = (props) => {
  const value = useMemo<string>(() => {
    return props.value.toLocaleString('en-NZ', {
      maximumFractionDigits: 2,
      signDisplay: 'exceptZero',
      style: props.style
    });
  }, [props.style, props.value]);

  if (props.positive) {
    return <Positive>{value}</Positive>;
  }

  if (props.negative) {
    return <Negative>{value}</Negative>;
  }

  return <td>{value}</td>;
};
