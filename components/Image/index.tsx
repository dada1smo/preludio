import { FunctionComponent } from 'react';
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  priority?: boolean;
}

const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  height,
  width,
  priority,
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      priority={priority}
    />
  );
};

export default Image;
