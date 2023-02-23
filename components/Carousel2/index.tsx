import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
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
  cols?: number;
  fade?: {
    left: string;
    right: string;
  };
  title: {
    tag: TextVariant;
    variant: TextVariant;
    text: string;
    classes: string;
  };
}

const Carousel: FunctionComponent<CarouselProps> = ({
  items,
  cols = 4,
  fade,
  title,
}) => {
  const [current, setCurrent] = useState<number>(1);

  function handleRoot(type: number) {
    switch (type) {
      case 4:
        return styles.root_4_cols;
      case 3:
        return styles.root_3_cols;
      default:
        return styles.root_4_cols;
    }
  }

  const slides = items.map((i, index) => {
    return {
      title: i.title,
      content: i.content,
      id: `s${index + 1}`,
    };
  });

  const positions = Math.ceil(slides.length - cols + 2);

  console.log(positions);

  function previous() {
    const n = current;
    if (n > 1) {
      setCurrent(n - 1);
    }
  }

  function next() {
    const n = current;
    if (n < positions) {
      setCurrent(n + 1);
    }
  }

  function slide() {
    const n = current - 1;

    return `translateX(calc(var(--slide-move) * ${n * -1}))`;
  }

  return (
    <div
      className={`overflow-hidden ${handleRoot(cols)} relative ${styles.root}`}
    >
      <div className="flex justify-between mb-8 md:relative sticky left-0">
        {title && (
          <Text tag={title.tag} variant={title.variant} classes={title.classes}>
            {title.text}
          </Text>
        )}

        <div className="md:flex hidden gap-4 items-center justify-center">
          <Button
            label=""
            size="sm"
            shape="circle_sm"
            variant="main_reversed"
            icon={{ name: ['fas', 'arrow-left'], position: 'center' }}
            onClick={() => previous()}
          />
          <Button
            label=""
            size="sm"
            shape="circle_sm"
            variant="main_reversed"
            icon={{ name: ['fas', 'arrow-right'], position: 'center' }}
            onClick={() => next()}
          />
        </div>
      </div>
      <div className="md:overflow-hidden overflow-auto relative">
        {fade && (
          <div
            className={`sm:absolute md:block hidden left-0 top-0 h-full w-16 bg-gradient-to-r ${fade.left} z-50 transition duration-300`}
            style={{ visibility: current === 1 ? 'hidden' : 'visible' }}
          />
        )}
        <div
          className={`flex gap-8 overflow-hidden transition duration-300 items-stretch pb-8`}
          style={{
            transform: slide(),
            width: `calc(var(--slide-move) * ${slides.length})`,
          }}
        >
          {slides.map((s) => {
            return (
              <div key={s.id} className={`${styles.slide}`}>
                {s.content}
              </div>
            );
          })}
        </div>
        {fade && (
          <div
            className={`absolute md:block hidden right-0 top-0 h-full w-16 bg-gradient-to-l ${fade.right} z-50`}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
