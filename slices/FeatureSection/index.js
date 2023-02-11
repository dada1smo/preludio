import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import RichText from '@/components/RichText';
import Image from '@/components/Image';
import Text from '@/components/Text';

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSectionsSlice} FeaturesSectionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSectionsSlice>} FeaturesSectionsProps
 * @param { FeaturesSectionsProps }
 */
const FeaturesSections = ({ slice }) => {
  const colSpan = slice.variation === 'default' ? 'col-span-4' : 'col-span-3';

  return (
    <section className="container mx-auto py-20">
      <div className="grid md:grid-cols-12 grid-cols-6 gap-8">
        {slice.items.length > 0 &&
          slice.items.map(({ title, description, image }) => {
            return (
              <div
                key={title}
                className={`col-start-auto ${colSpan} flex flex-col items-start justify-start gap-8`}
              >
                {image && (
                  <div className="flex justify-start w-full">
                    <div>
                      <Image
                        src={image.url}
                        alt={image.alt || ''}
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                )}
                <div>
                  <Text tag="h3" variant="h3" classes="mb-3">
                    {title || 'Título'}
                  </Text>
                  {description ? (
                    <RichText
                      component="paragraph"
                      variant="p"
                      tag="p"
                      field={description}
                    />
                  ) : (
                    <Text tag="p" variant="p">
                      Descrição
                    </Text>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default FeaturesSections;
