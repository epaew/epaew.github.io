import styled from '@emotion/styled';
import { FC } from 'react';

const Typography = styled.h1(({ theme }) => ({
  color: '#888',
  fontFamily: theme.fontFamily.appTitle,
  fontSize: theme.fontSize['48'],
  margin: 0,
}));

export const AppTitle: FC = () => <Typography>epaew.net</Typography>;
