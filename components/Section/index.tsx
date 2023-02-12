import { FunctionComponent, ReactNode } from 'react';

interface SectionProps {
  classes?: string;
  children: ReactNode;
}

const Section: FunctionComponent<SectionProps> = ({ classes, children }) => {
  return (
    <section className={`${classes || ''}`}>
      <div className="container mx-auto py-20 px-4">{children}</div>
    </section>
  );
};

export default Section;
