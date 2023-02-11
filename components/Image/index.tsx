import { FunctionComponent } from 'react';
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const Image: FunctionComponent<ImageProps> = ({ src, alt, height, width }) => {
  return <NextImage src={src} alt={alt} height={height} width={width} />;
};

export default Image;
