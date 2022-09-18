import { FC, ReactNode } from 'react';

import { Main, Root } from '../atoms';
import { AppFooter, AppHeader } from '../organisms';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Root>
      <AppHeader />
      <Main>
        {children}
      </Main>
      <AppFooter />
    </Root>
  );
};
