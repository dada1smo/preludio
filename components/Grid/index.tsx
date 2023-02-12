import { FunctionComponent, ReactNode } from 'react';

interface GridProps {
  classes?: string;
  children: ReactNode;
}

const Grid: FunctionComponent<GridProps> = ({ classes, children }) => {
  return (
    <div className={`grid md:grid-cols-12 grid-cols-6 gap-8 ${classes || ''}`}>
      {children}
    </div>
  );
};

export default Grid;
