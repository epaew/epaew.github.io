import styled from '@emotion/styled';

export const Footer = styled.footer(({ theme }) => ({
  backgroundColor: theme.backgroundColor.secondary,
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
}));
