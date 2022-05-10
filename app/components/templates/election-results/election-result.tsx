import { FC, useMemo } from 'react';

import { Container } from '~/components/atoms/container/container';
import { PageHeader } from '~/components/atoms/page-header/page-header';
import { NumberCell } from '~/components/molecules/table/number-cell';
import { Table } from '~/components/molecules/table/table';
import { TableRow } from '~/components/molecules/table/table-row';

import { ElectionResultRow } from './election-result-row';

interface ElectionResultProps extends Data.ElectionResult {
  year: Data.Year;
}

/**
 *
 * @param props
 */
export const ElectionResult: FC<ElectionResultProps> = (props) => {
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
    <Container>
      <PageHeader title={`${props.year} General Election`} />

      <Table>
        <colgroup>
          <col width="40%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Party</th>
            <th scope="col">Votes</th>
            <th scope="col">Electorates</th>
            <th scope="col">List seats</th>
            <th scope="col">Total seats</th>
          </tr>
        </thead>
        <tfoot>
          <TableRow>
            <th scope="row">&nbsp;</th>
            <NumberCell value={votes} />
            <NumberCell value={electorates} />
            <NumberCell value={seats - electorates} />
            <NumberCell value={seats} />
          </TableRow>
        </tfoot>
        <tbody>
          {props.rows.map((row, i) => (
            <ElectionResultRow key={i} {...row} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
