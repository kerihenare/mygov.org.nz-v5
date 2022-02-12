import { VFC } from 'react';
import { useParams } from 'react-router';

import { ElectionResult } from '~/components/templates/election-results/election-result';
import { elections } from '~/data/elections';

/**
 *
 */
const Year: VFC = () => {
  const { year } = useParams();

  return <ElectionResult year={year as Year} />;
};

export default Year;
