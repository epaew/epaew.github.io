import { FC } from 'react';

import { Header } from '../atoms';
import { AppTitle } from '../molecules';

export const AppHeader: FC = () => (
  <Header>
    <AppTitle />
  </Header>
);
