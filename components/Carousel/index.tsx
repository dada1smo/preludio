import { FunctionComponent, ReactNode, useState } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import styles from './Tabs.module.css';
import Button from '../Button';
import Text, { TextVariant } from '../Text';

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
  const [current, setCurrent] = useState<string>('t1');

  const slides = items.map((i, index) => {
    return {
      title: i.title,
      content: i.content,
      id: `t${index + 1}`,
    };
  });

  function previous() {
    const n = parseInt(current.split('')[1].toString());
    if (n > 1) {
      setCurrent(`t${n - 1}`);
    }
  }

  function next() {
    const n = parseInt(current.split('')[1].toString());
    if (n < slides.length) {
      setCurrent(`t${n + 1}`);
    }
  }

  return (
    <RadixTabs.Root value={current} className="overflow-hidden">
      <div className="flex justify-between mb-8">
        {title && (
          <Text tag={title.tag} variant={title.variant} classes={title.classes}>
            {title.text}
          </Text>
        )}
        <RadixTabs.List className="flex gap-4 items-center justify-center">
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
        className={`flex gap-8 overflow-hidden transition duration-300 ${styles[current]}`}
      >
        {slides.map((s) => {
          return (
            <RadixTabs.Content
              key={s.id}
              value={s.id}
              className="w-96"
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
