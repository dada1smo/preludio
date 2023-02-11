import {
  JSXFunctionSerializer,
  JSXMapSerializer,
  PrismicRichText,
} from '@prismicio/react';
import { RichTextField } from '@prismicio/types';
import { FunctionComponent } from 'react';
import Text, { TextVariant } from '../Text';

interface RichTextProps {
  field: RichTextField | null | undefined;
  variant: TextVariant;
  tag: TextVariant;
  component: any;
}

const RichText: FunctionComponent<RichTextProps> = ({
  field,
  variant,
  tag,
  component,
}) => {
  type componentVariant = JSXMapSerializer | JSXFunctionSerializer | undefined;
  const components: componentVariant = {
    [component as keyof componentVariant]: ({ children }: any) => (
      <Text variant={variant} tag={tag}>
        {children}
      </Text>
    ),
  };

  return <PrismicRichText field={field} components={components} />;
};

export default RichText;
