import type { FC } from 'react';
import { useParams } from 'react-router';
import type { MetaFunction } from 'remix';

import { ElectionResult } from '~/components/templates/election-results/election-result';
import { elections } from '~/data/elections';

/**
 *
 */
export const meta: MetaFunction = ({ params }) => {
  return { title: `${params.year} General Election - MyGov Aotearoa` };
};

/**
 *
 */
const ResultYear: FC = () => {
  const { year } = useParams();
  const result = elections[year as Data.Year];

  return <ElectionResult {...result} year={year as Data.Year} />;
};

export default ResultYear;
