import styled from '@emotion/styled';
import { FC } from 'react';

const Typography = styled.p(({ theme }) => ({
  fontSize: theme.fontSize['12'],
  margin: theme.spacing(1, 2),
}));

export const Copyright: FC = () => <Typography>&copy; 2018 Ryo MAEDA</Typography>;
