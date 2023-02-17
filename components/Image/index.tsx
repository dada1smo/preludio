import { FunctionComponent } from 'react';
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  priority?: boolean;
  fill?: boolean;
  style?: object;
  unoptimized?: boolean;
}

const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  height,
  width,
  priority,
  fill,
  style,
  unoptimized,
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      priority={priority}
      fill={fill}
      style={style}
      unoptimized={unoptimized}
    />
  );
};

export default Image;
