import { useMemo, FC } from 'react';
import styled from 'styled-components';

interface NumberCellProps {
  digits?: number;
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
export const NumberCell: FC<NumberCellProps> = (props) => {
  const value = useMemo<string>(() => {
    return props.value.toLocaleString('en-NZ', {
      maximumFractionDigits: props.digits || 0,
      signDisplay: props.negative || props.positive ? 'exceptZero' : 'never',
      style: props.style
    });
  }, [props.digits, props.negative, props.positive, props.style, props.value]);

  if (props.positive) {
    return <Positive>{value}</Positive>;
  }

  if (props.negative) {
    return <Negative>{value}</Negative>;
  }

  return <td>{value}</td>;
};
