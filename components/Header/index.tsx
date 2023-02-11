import { MenuDocument } from '@/.slicemachine/prismicio';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { FunctionComponent, useEffect, useState } from 'react';

const Header: FunctionComponent = () => {
  const [menu, setMenu] = useState<MenuDocument | null>(null);

  const getMenu = async () => {
    const client = createClient();

    const slice = await client.getSingle('menu');

    if (slice) {
      setMenu(slice);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <header className="w-full h-20 flex items-center justify-between bg-white px-4 py-2 shadow-lg shadow-alt-300/20">
      <div>Header</div>
      {menu && <SliceZone slices={menu.data.slices} components={components} />}
    </header>
  );
};

export default Header;
