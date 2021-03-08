import styled from '@emotion/styled';

export const Root = styled.div(({ theme }) => ({
  backgroundColor: theme.backgroundColor.primary,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
}));
