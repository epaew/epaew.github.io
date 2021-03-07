import styled from '@emotion/styled';
import { Property } from 'csstype';

type FlexContainerProps = {
  alignContent?: Property.AlignContent;
  alignItems?: Property.AlignItems;
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  justifyItems?: Property.JustifyItems;
};

export const FlexContainer = styled.div<FlexContainerProps>(({
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
}) => ({
  alignContent,
  alignItems,
  display: 'flex',
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
}));
