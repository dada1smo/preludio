import { FunctionComponent } from 'react';
import Button from '../Button';

const Header: FunctionComponent = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between bg-white px-4 py-2 shadow-lg shadow-amber-300/20">
      <div>Header</div>
      <ul className="flex items-center gap-4">
        <li>
          <Button label="Sobre" variant="alt_reversed" shape="compact" />
        </li>
        <li>
          <Button label="Assinar" link={{ href: '/' }} variant="alt" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
