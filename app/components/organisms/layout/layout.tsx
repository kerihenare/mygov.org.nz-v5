import { FC, Fragment, ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from './footer';
import { GlobalStyle } from './global-style';
import { Header } from './header/header';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  flex: 1;
  padding: 1.5rem 0;
`;

/**
 *
 * @param props
 */
export const Layout: FC<LayoutProps> = (props) => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Main id="content">{props.children}</Main>
    <Footer />
  </Fragment>
);
