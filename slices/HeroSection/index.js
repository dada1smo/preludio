import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Button from '@/components/Button';
import Text from '@/components/Text';
import Image from '@/components/Image';
import Section from '@/components/Section';
import Grid from '@/components/Grid';
import IconList from '@/components/IconList';

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @param { HeroSectionProps }
 */
const HeroSection = ({ slice }) => {
  const items =
    slice.items.length === 0
      ? []
      : slice.items.map((item) => {
          return {
            name: item.name || '',
            text: item.text || '',
            icon: ['fas', 'check'],
          };
        });

  return (
    <Section classes="bg-gradient-to-br from-alt-50 via-white to-white">
      <Grid>
        <div className="col-start-1 md:col-span-5 col-span-6">
          {slice.primary.image && (
            <div className="flex justify-center w-full">
              <div>
                <Image
                  src={slice.primary.image.url}
                  alt={slice.primary.image.alt || ''}
                  width={360}
                  height={360}
                />
              </div>
            </div>
          )}
        </div>
        <div className="md:col-start-6 col-start-1 col-span-6 flex flex-col items-start justify-center gap-8">
          <Text tag="h1" variant="h1">
            {slice.primary.title ? slice.primary.title : 'Título'}
          </Text>
          <Text tag="p" variant="h5">
            {slice.primary.description
              ? slice.primary.description
              : 'Descrição'}
          </Text>
          <div className="flex flex-col items-start gap-4">
            <Button
              label={
                slice.primary.cta_label ? slice.primary.cta_label : 'Botão'
              }
              variant="alt"
              size="lg"
              link={{
                href: slice.primary.cta_link ? slice.primary.cta_link : '/',
              }}
            />
            <IconList list={items} />
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default HeroSection;
