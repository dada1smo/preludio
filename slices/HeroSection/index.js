import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Button from '@/components/Button';
import Text from '@/components/Text';

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @param { HeroSectionProps }
 */
const HeroSection = ({ slice }) => (
  <section className="container mx-auto py-20">
    <div className="grid md:grid-cols-12 grid-cols-6 gap-8">
      <div className="col-start-1 col-span-6">
        <div className="h-96 bg-gradient-to-tr from-main-500 via-orange-300  to-alt-200" />
      </div>
      <div className="md:col-start-7 col-start-1 col-span-6 flex flex-col items-start justify-center gap-8">
        <Text tag="h1" variant="h1">
          {slice.primary.title ? slice.primary.title : 'Título'}
        </Text>
        <Text tag="p" variant="h5">
          {slice.primary.description ? slice.primary.description : 'Descrição'}
        </Text>
        <Button
          label={slice.primary.cta_label ? slice.primary.cta_label : 'Botão'}
          variant="alt"
          size="lg"
          link={{ href: slice.primary.cta_link ? slice.primary.cta_link : '/' }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
