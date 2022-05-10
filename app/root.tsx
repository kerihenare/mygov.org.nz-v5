import type { FC } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import { ThemeProvider } from 'styled-components';

import { Layout } from './components/organisms/layout/layout';
import { lightTheme } from './theme';

/**
 *
 */
export const meta: MetaFunction = () => ({
  title: 'MyGov Aotearoa'
});

/**
 *
 */
const Root: FC = () => (
  <html lang="en-NZ">
    <head>
      <meta charSet="utf-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
      {typeof document === 'undefined' ? '__STYLES__' : null}
    </head>
    <ThemeProvider theme={lightTheme}>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </ThemeProvider>
  </html>
);

export default Root;
