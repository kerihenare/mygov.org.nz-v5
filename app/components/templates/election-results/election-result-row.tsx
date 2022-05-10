import type { FC } from 'react';

import { NumberCell } from '~/components/molecules/table/number-cell';
import { PartyHeader } from '~/components/molecules/table/party-header';
import { TableRow } from '~/components/molecules/table/table-row';

/**
 *
 * @param props
 */
export const ElectionResultRow: FC<Data.ElectionRow> = (props) => (
  <TableRow success={Boolean(props.seats)}>
    <PartyHeader party={props.party} />
    <NumberCell value={props.votes} />
    <NumberCell value={props.electorates} />
    <NumberCell value={props.seats - props.electorates} />
    <NumberCell value={props.seats} />
  </TableRow>
);
