import type { FC } from 'react';
import type { MetaFunction } from 'remix';

import { ElectionResults } from '~/components/templates/election-results/election-results';
import { elections } from '~/data/elections';

/**
 *
 */
export const meta: MetaFunction = () => ({
  title: 'General Election Results - MyGov Aotearoa'
});

/**
 *
 */
const Index: FC = () => <ElectionResults results={elections} />;

export default Index;
