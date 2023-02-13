import { FunctionComponent, ReactNode } from 'react';
import styles from './Text.module.css';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type VariantCollection = {
  [key in TextVariant]: string;
};

const textVariants: VariantCollection = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: '',
  h5: styles.h5,
  h6: styles.h6,
  p: '',
};

interface TextProps {
  variant: TextVariant;
  tag: TextVariant;
  children?: ReactNode;
  pure?: boolean;
  classes?: string;
}

const Text: FunctionComponent<TextProps> = ({
  variant,
  tag,
  children,
  pure = true,
  classes,
}) => {
  const Tag = tag;
  const textClasses = `${textVariants[variant as keyof VariantCollection]} ${
    classes || ''
  }`;

  if (!children) {
    return null;
  }

  return pure ? (
    <Tag className={textClasses}>{children}</Tag>
  ) : (
    <div className={textClasses}>{children}</div>
  );
};

export default Text;
