import type { CSSProperties, FC } from 'react';
import styled from 'styled-components';

import { names } from '~/data/names';
import { swatches } from '~/data/swatches';

interface PartyHeaderProps {
  party: symbol;
}

const Th = styled.th`
  th& {
    padding-left: 2.5rem;
    position: relative;
  }

  &:before {
    background: var(--swatch)
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), hsla(0, 0%, 100%, 0.05));
    border-radius: 0.375rem;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    content: ' ';
    height: 0.75rem;
    left: 1rem;
    margin-top: -0.375rem;
    position: absolute;
    top: 50%;
    width: 0.75rem;
  }
`;

/**
 *
 * @param props
 */
export const PartyHeader: FC<PartyHeaderProps> = (props) => {
  const style = { '--swatch': `#${swatches[props.party]}` } as CSSProperties;

  return (
    <Th scope="row" style={style}>
      {names[props.party]}
    </Th>
  );
};
