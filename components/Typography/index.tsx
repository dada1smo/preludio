import { FunctionComponent, ReactNode } from 'react';
import styles from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type VariantCollection = {
  [key in TypographyVariant]: string;
};

const typographyVariants: VariantCollection = {
  h1: styles.h1,
  h2: '',
  h3: '',
  h4: '',
  h5: styles.h5,
  h6: '',
  p: '',
};

interface TypographyProps {
  variant: TypographyVariant;
  tag: TypographyVariant;
  children: ReactNode;
  pure?: boolean;
  classes?: string;
}

const Typography: FunctionComponent<TypographyProps> = ({
  variant,
  tag,
  children,
  pure = true,
  classes,
}) => {
  const Tag = tag;
  const textClasses = `${
    typographyVariants[variant as keyof VariantCollection]
  } ${classes || ''}`;
  return pure ? (
    <Tag className={textClasses}>{children}</Tag>
  ) : (
    <div className={textClasses}>{children}</div>
  );
};

export default Typography;
