import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Section from '@/components/Section';
import Grid from '@/components/Grid';
import RichText from '@/components/RichText';
import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Text from '@/components/Text';
import Image from '@/components/Image';

/**
 * @typedef {import("@prismicio/client").Content.TabsSectionSlice} TabsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TabsSectionSlice>} TabsSectionProps
 * @param { TabsSectionProps }
 */
const CarouselSection = ({ slice }) => {
  const slides = slice.items
    .map((t) => {
      return {
        title: t.title,
        content: (
          <div className="bg-white px-4 py-3 flex gap-4 items-stretch justify-stretch md:flex-row flex-col h-full">
            {t.image && (
              <div className="lg:w-1/2 w-full lg:h-72 md:h-60 h-48 relative">
                <Image
                  src={t.image.url}
                  alt={t.image.alt || ''}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )}
            <div className="lg:w-1/2 w-full flex flex-col gap-4 py-4 justify-between">
              <div>
                <Text tag="h3" variant="h3" classes="mb-2">
                  {t.title}
                </Text>
                <RichText
                  component="paragraph"
                  variant="p"
                  tag="p"
                  field={t.description}
                />
              </div>
              <Button
                shape="compact"
                variant="main_reversed"
                label={t.cta_text}
                link={{ href: t.cta_link }}
                icon={{ name: ['fas', 'arrow-right'], position: 'after' }}
              />
            </div>
          </div>
        ),
      };
    })
    .flatMap((i) => [i, i]);

  return (
    <Section classes="bg-main-200">
      <Grid>
        <div className="col-start-1 col-span-full">
          <Carousel
            items={slides}
            title={{
              tag: 'h2',
              variant: 'h6',
              text: slice.primary.surtitle,
              classes: '!text-alt-700',
            }}
          />
        </div>
      </Grid>
    </Section>
  );
};

export default CarouselSection;
