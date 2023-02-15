import { FunctionComponent, ReactNode } from 'react';

interface SectionProps {
  classes?: string;
  full?: boolean;
  children: ReactNode;
}

const Section: FunctionComponent<SectionProps> = ({
  classes,
  full,
  children,
}) => {
  const container = full ? 'container-none' : 'container';

  return (
    <section className={`${classes || ''}`}>
      <div className={`${container} mx-auto py-20 px-4`}>{children}</div>
    </section>
  );
};

export default Section;
