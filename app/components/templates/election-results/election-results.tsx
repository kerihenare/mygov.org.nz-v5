import type { VFC } from 'react';

import { Container } from '~/components/atoms/container/container';
import { PageHeader } from '~/components/atoms/page-header/page-header';

interface ElectionResultsProps {
  years: Year[];
}

/**
 *
 * @param props
 */
export const ElectionResults: VFC<ElectionResultsProps> = (props) => {
  //

  return (
    <Container>
      <PageHeader title="Election Results" />
    </Container>
  );
};
