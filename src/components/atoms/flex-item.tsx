import styled from '@emotion/styled';
import { Property } from 'csstype';

type FlexItemProps = {
  alignSelf?: Property.AlignSelf;
  flex?: Property.Flex;
  flexBasis?: Property.FlexBasis;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  order?: Property.Order;
};

export const FlexItem = styled.div<FlexItemProps>(({
  alignSelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  order,
}) => ({
  alignSelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  order,
}));
