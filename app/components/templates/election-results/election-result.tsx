import type { VFC } from 'react';

import { Container } from '~/components/atoms/container/container';
import { PageHeader } from '~/components/atoms/page-header/page-header';

interface ElectionResultProps {
  year: Year;
}

/**
 *
 * @param props
 */
export const ElectionResult: VFC<ElectionResultProps> = (props) => {
  //

  return (
    <Container>
      <PageHeader title={`${props.year} General Election`} />
    </Container>
  );
};
