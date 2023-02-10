import React from 'react';
import Button from '@/components/Button';

/**
 * @typedef {import("@prismicio/client").Content.MenuNavigationSlice} MenuNavigationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuNavigationSlice>} MenuNavigationProps
 * @param { MenuNavigationProps }
 */
const MenuNavigation = ({ slice }) => (
  <nav>
    <ul className="flex items-center gap-4">
      <>
        {slice.items.length > 0 &&
          slice.items.map(({ label, url }) => {
            return (
              <li key={url}>
                <Button
                  label={label || ''}
                  variant="alt_reversed"
                  shape="compact"
                  link={{ href: url || '' }}
                />
              </li>
            );
          })}
        <li>
          <Button
            label={slice.primary.cta_label || ''}
            link={{ href: slice.primary.cta_link || '' }}
            variant="alt"
          />
        </li>
      </>
    </ul>
  </nav>
);

export default MenuNavigation;
