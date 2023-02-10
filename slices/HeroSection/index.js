import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Button from '@/components/Button';

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
        <h1 className="text-5xl lg:text-6xl font-bold underline font-sans">
          {slice.primary.title ? slice.primary.title : 'Título'}
        </h1>
        <p className="text-xl lg:text-2xl font-sans text-main-600">
          {slice.primary.description ? slice.primary.description : 'Descrição'}
        </p>
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
