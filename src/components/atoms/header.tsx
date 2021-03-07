import styled from '@emotion/styled';

export const Header = styled.header(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.backgroundColor.secondary,
  display: 'flex',
  justifyContent: 'space-around',
  height: '64px',
  width: '100%',
}));
