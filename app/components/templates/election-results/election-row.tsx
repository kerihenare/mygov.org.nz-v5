import { FC, useMemo } from 'react';

import { NumberCell } from '~/components/molecules/table/number-cell';
import { TableRow } from '~/components/molecules/table/table-row';

interface ElectionRowProps extends Data.ElectionResult {
  year: Data.Year;
}

/**
 *
 * @param props
 */
export const ElectionRow: FC<ElectionRowProps> = (props) => {
  const electorates = useMemo<number>(() => {
    return props.rows.reduce((total, row) => total + row.electorates, 0);
  }, [props.rows]);

  const seats = useMemo<number>(() => {
    return props.rows.reduce((total, row) => total + row.seats, 0);
  }, [props.rows]);

  const votes = useMemo<number>(() => {
    return props.rows.reduce((total, row) => total + row.votes, 0);
  }, [props.rows]);

  return (
    <TableRow to={`/election-results/${props.year}`}>
      <th scope="row">{props.year}</th>
      <NumberCell value={votes} />
      <NumberCell value={electorates} />
      <NumberCell value={seats - electorates} />
      <NumberCell value={seats} />
    </TableRow>
  );
};
