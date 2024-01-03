import React from 'react';
import {ImageRequireSource} from 'react-native';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';
import styled from 'styled-components/native';

interface ImageWrapperProps extends FastImageProps {
  source: Source | ImageRequireSource;
  width?: string;
  height?: string;
  radius?: string;
}

const ImageWrapper = ({
  source,
  width = '20',
  height = '20',
  radius = '0',
  ...props
}: ImageWrapperProps) => {
  // '%'로 끝나는지 여부에 따라 string 또는 number로 전달
  const widthValue = width.endsWith('%') ? width : parseInt(width, 10);
  const heightValue = height.endsWith('%') ? height : parseInt(height, 10);

  return (
    <>
      <ImageContainer
        source={source}
        width={widthValue}
        height={heightValue}
        radius={radius}
        {...props}
      />
    </>
  );
};

const ImageContainer = styled(FastImage)<{
  width: string | number;
  height: string | number;
  radius: string;
}>`
  width: ${({width}) =>
    typeof width === 'string' ? `${width}%` : width + 'px'};
  height: ${({height}) =>
    typeof height === 'string' ? `${height}%` : height + 'px'};
  border-radius: ${({radius}) => radius + 'px'};
`;

export default ImageWrapper;
