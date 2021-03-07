import styled from '@emotion/styled';
import { Property } from 'csstype';

type FlexItemProps = {
  alignSelf?: Property.AlignSelf;
  flex?: Property.Flex;
  flexBasis?: Property.FlexBasis;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  margin?: number | string | number[];
  order?: Property.Order;
  padding?: number | string | number[];
  width?: 150 | 300 | 450 | 600 | 750 | 900 | 1050 | 1200;
};

export const FlexItem = styled.div<FlexItemProps>(({
  alignSelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  margin,
  order,
  padding,
  theme,
  width,
}) => ({
  alignSelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  margin: margin && theme.spacing(...[margin].flat()),
  order,
  padding: padding && theme.spacing(...[padding].flat()),
  maxWidth: width && `${width}px`,
  width: '100%',
}));
