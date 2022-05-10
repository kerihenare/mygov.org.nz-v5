import { redirect } from '@remix-run/cloudflare';
import type { FC } from 'react';
import type { ActionFunction } from 'remix';

/**
 *
 */
export const action: ActionFunction = () => {
  return redirect('/tools/mmp-review');
};

/**
 *
 */
const Tools: FC = () => null;

export default Tools;
