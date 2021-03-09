import styled from '@emotion/styled';

interface ImageProps {
  opacity?: number;
}

export const Image = styled.img<ImageProps>(({ opacity }) => ({
  opacity,
}));
