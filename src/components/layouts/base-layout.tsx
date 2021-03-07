import { FC } from 'react';

import { Main, Root } from '../atoms';
import { AppFooter, AppHeader } from '../organisms';

export const BaseLayout: FC = ({ children }) => {
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
