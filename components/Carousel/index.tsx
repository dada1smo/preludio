import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import styles from './Carousel.module.css';
import Button from '../Button';
import Text, { TextVariant } from '../Text';
import useWindowSize from '@/hooks/use-window-size';

interface SlideProps {
  title: string;
  content: ReactNode;
}

interface CarouselProps {
  items: SlideProps[];
  title: {
    tag: TextVariant;
    variant: TextVariant;
    text: string;
    classes: string;
  };
}

const Carousel: FunctionComponent<CarouselProps> = ({ items, title }) => {
  const [current, setCurrent] = useState<string>('s1');

  const slides = items.map((i, index) => {
    return {
      title: i.title,
      content: i.content,
      id: `s${index + 1}`,
    };
  });

  function previous() {
    const n = parseInt(current.split('')[1].toString());
    if (n > 1) {
      setCurrent(`s${n - 1}`);
    }
  }

  function next() {
    const n = parseInt(current.split('')[1].toString());
    if (n < slides.length) {
      setCurrent(`s${n + 1}`);
    }
  }

  function slide() {
    const n = parseInt(current.split('')[1].toString()) - 1;
    if (n === 0) {
      return 'translateX(var(--slide-start))';
    }

    return `translateX(calc(var(--slide-start) - var(--slide-move) * ${n}))`;
  }

  return (
    <RadixTabs.Root
      value={current}
      className={`md:overflow-hidden overflow-auto ${styles.root} relative`}
    >
      <div className="flex justify-between mb-8 md:relative sticky left-0">
        {title && (
          <Text tag={title.tag} variant={title.variant} classes={title.classes}>
            {title.text}
          </Text>
        )}
        <RadixTabs.List className="md:flex hidden gap-4 items-center justify-center">
          <Button
            label=""
            size="sm"
            shape="circle_sm"
            variant="main_reversed"
            icon={{ name: ['fas', 'arrow-left'], position: 'center' }}
            onClick={() => previous()}
          />
          {slides.map((s) => {
            return (
              <RadixTabs.Trigger
                key={s.id}
                value={s.id}
                onClick={() => setCurrent(s.id)}
                className="rounded-full !p-1 h-4 w-4 transition duration-300 data-[state=active]:bg-main-900 bg-transparent border-2 border-main-900"
              />
            );
          })}
          <Button
            label=""
            size="sm"
            shape="circle_sm"
            variant="main_reversed"
            icon={{ name: ['fas', 'arrow-right'], position: 'center' }}
            onClick={() => next()}
          />
        </RadixTabs.List>
      </div>
      <div
        className={`flex gap-8 overflow-hidden transition duration-300 items-stretch pb-8 px-8`}
        style={{
          transform: slide(),
          width: `calc(var(--slide-move) * ${slides.length})`,
        }}
      >
        {slides.map((s) => {
          return (
            <RadixTabs.Content
              key={s.id}
              value={s.id}
              className={`${styles.slide}`}
              forceMount
            >
              {s.content}
            </RadixTabs.Content>
          );
        })}
      </div>
    </RadixTabs.Root>
  );
};

export default Carousel;
