import { VFC } from 'react';

import { ElectionResults } from '~/components/templates/election-results/election-results';
import { elections } from '~/data/elections';

/**
 *
 */
const Index: VFC = () => {
  return <ElectionResults years={Object.keys(elections) as Year[]} />;
};

export default Index;
