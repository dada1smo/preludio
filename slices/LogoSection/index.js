import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Section from '@/components/Section';
import Grid from '@/components/Grid';
import Image from '@/components/Image';

/**
 * @typedef {import("@prismicio/client").Content.LogoSectionSlice} LogoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSectionSlice>} LogoSectionProps
 * @param { LogoSectionProps }
 */
const LogoSection = ({ slice }) => {
  console.log(slice);
  return (
    <Section classes="bg-white">
      <Grid>
        <div className="col-start-1 col-span-full flex gap-8 md:overflow-hidden overflow-auto">
          {slice.items.length > 0 &&
            slice.items.map(({ logo }) => {
              return (
                <Image
                  key={logo.url}
                  src={logo.url}
                  alt={logo.alt || ''}
                  width={320}
                  height={1260}
                />
              );
            })}
        </div>
      </Grid>
    </Section>
  );
};

export default LogoSection;
