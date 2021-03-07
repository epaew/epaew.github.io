import styled from '@emotion/styled';

export const Root = styled.div(({ theme }) => ({
  backgroundColor: theme.backgroundColor.primary,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: theme.fontFamily.body,
  fontSize: theme.fontSize['16'],
  minHeight: '100vh',
  width: '100%',
}));
