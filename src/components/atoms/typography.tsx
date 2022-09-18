import styled from '@emotion/styled';
import { Property } from 'csstype';
import { FC, ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  color?: Property.Color;
  fontFamily?: Property.FontFamily;
  fontSize?: `${number}rem`;
  margin?: number | string | number[];
  padding?: number | string | number[];
  variant?: `h${1 | 2 | 3 | 4 | 5 | 6}` | 'p';
}

export const Typography: FC<TypographyProps> = ({
  color,
  fontFamily,
  fontSize,
  margin,
  padding,
  variant = 'p',
  ...rest
}) => {
  const StyledTypography = styled[variant](({ theme }) => ({
    color,
    fontFamily: fontFamily ?? theme.typography[variant].fontFamily,
    fontSize: fontSize ?? theme.typography[variant].fontSize,
    margin: margin && theme.spacing(...[margin].flat()),
    padding: padding && theme.spacing(...[padding].flat()),
  }));

  return <StyledTypography {...rest} />;
};
