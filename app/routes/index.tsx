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
const Homepage: FC = () => null;

export default Homepage;
