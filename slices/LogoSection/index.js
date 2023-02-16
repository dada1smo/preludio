import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Section from '@/components/Section';
import Grid from '@/components/Grid';
import Image from '@/components/Image';
import Text from '@/components/Text';

/**
 * @typedef {import("@prismicio/client").Content.LogoSectionSlice} LogoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSectionSlice>} LogoSectionProps
 * @param { LogoSectionProps }
 */
const LogoSection = ({ slice }) => {
  return (
    <Section classes="bg-white">
      <Grid>
        <div className="col-start-1 col-span-full border-y-2 border-alt-100 pt-8 pb-4">
          <Text tag="h2" variant="h6" classes="text-center">
            {slice.primary.title ? slice.primary.title : 'Título'}
          </Text>
          <div className="flex gap-8 md:overflow-hidden overflow-auto">
            {slice.items.length > 0 &&
              slice.items.map(({ logo }) => {
                return (
                  <Image
                    key={logo.url}
                    src={logo.url}
                    alt={logo.alt || ''}
                    width={320}
                    height={1260}
                    priority
                  />
                );
              })}
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default LogoSection;
