import React, { useCallback, useEffect, useState } from 'react';
import Section from '@/components/Section';
import Grid from '@/components/Grid';
import RichText from '@/components/RichText';
import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Text from '@/components/Text';
import Image from '@/components/Image';
import { createClient } from '@/prismicio';

/**
 * @typedef {import("@prismicio/client").Content.TabsSectionSlice} TabsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TabsSectionSlice>} TabsSectionProps
 * @param { TabsSectionProps }
 */
const CarouselSection = ({ slice }) => {
  const amount = slice.primary.amount ? parseInt(slice.primary.amount) : 4;
  const [books, setBooks] = useState([]);

  const getLastBooks = useCallback(async (type) => {
    const client = createClient();

    try {
      const response = await client.getAllByType(type);
      setBooks(
        response.map(({ data }) => {
          return data;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (slice.primary.document_type) {
      getLastBooks(slice.primary.document_type);
    }
  }, [getLastBooks, slice.primary.document_type]);

  const slides = books
    .filter((s, index) => index + 1 <= amount)
    .map((t) => {
      return {
        title: t.title,
        content: (
          <div className="bg-white px-4 py-3 flex gap-4 items-stretch justify-stretch md:flex-row flex-col h-full rounded-md shadow-lg shadow-main-400/30">
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
            <div className="lg:w-1/2 w-full lg:h-auto md:h-full h-1/2 flex flex-col gap-4 py-4 justify-between items-end">
              <div className="w-full">
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
    });

  return (
    <Section classes="bg-main-200">
      <Grid>
        <div className="col-start-1 col-span-full">
          {books.length > 0 && (
            <Carousel
              items={slides}
              title={{
                tag: 'h2',
                variant: 'h6',
                text: slice.primary.surtitle,
                classes: '!text-alt-700',
              }}
            />
          )}
          <div className="flex justify-center mt-8">
            <Button
              label={slice.primary.cta_text || ''}
              link={{ href: slice.primary.cta_link || '' }}
              variant="alt"
            />
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default CarouselSection;
