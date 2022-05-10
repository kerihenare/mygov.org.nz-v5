import type { FC } from 'react';

import { Container } from '~/components/atoms/container/container';
import { PageHeader } from '~/components/atoms/page-header/page-header';
import { Table } from '~/components/molecules/table/table';

import { ElectionRow } from './election-row';

interface ElectionResultsProps {
  results: Data.ElectionResults;
}

/**
 *
 * @param props
 */
export const ElectionResults: FC<ElectionResultsProps> = (props) => (
  <Container>
    <PageHeader title="General Election Results" />

    <main>
      <Table>
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Votes</th>
            <th scope="col">Electorates</th>
            <th scope="col">List seats</th>
            <th scope="col">Total seats</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.results)
            .reverse()
            .map(([year, result]) => (
              <ElectionRow {...result} key={year} year={year as Data.Year} />
            ))}
        </tbody>
      </Table>
    </main>
  </Container>
);
