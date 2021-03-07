import styled from '@emotion/styled';
import { Property } from 'csstype';

type FlexContainerProps = {
  alignContent?: Property.AlignContent;
  alignItems?: Property.AlignItems;
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  justifyItems?: Property.JustifyItems;
  margin?: number | string | number[];
  padding?: number | string | number[];
};

export const FlexContainer = styled.div<FlexContainerProps>(({
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  margin,
  padding,
  theme,
}) => ({
  alignContent,
  alignItems,
  display: 'flex',
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  margin: margin && theme.spacing(...[margin].flat()),
  padding: padding && theme.spacing(...[padding].flat()),
  width: '100%',
}));
