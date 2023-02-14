import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import RichText from '@/components/RichText';
import Image from '@/components/Image';
import Text from '@/components/Text';
import Section from '@/components/Section';
import Grid from '@/components/Grid';

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSectionsSlice} FeaturesSectionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSectionsSlice>} FeaturesSectionsProps
 * @param { FeaturesSectionsProps }
 */
const FeaturesSections = ({ slice }) => {
  const colSpan =
    slice.variation === 'default'
      ? 'md:col-span-4 col-span-6'
      : 'md:col-span-3 col-span-6';

  return (
    <Section classes="bg-gradient-to-br from-white via-white to-main-100">
      <Grid>
        <div className="col-start-1 col-span-full">
          <Text tag="h2" variant="h6">
            {slice.primary.surtitle}
          </Text>
          <Text tag="p" variant="h2" classes="mb-5">
            {slice.primary.title}
          </Text>
        </div>
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
      </Grid>
    </Section>
  );
};

export default FeaturesSections;
