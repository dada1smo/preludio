import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FunctionComponent } from 'react';
import IconListItem, { IconListItemProps } from './IconListItem';

interface IconListProps {
  list: IconListItemProps[];
}

const IconList: FunctionComponent<IconListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <IconListItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            text={item.text}
          />
        );
      })}
    </ul>
  );
};

export default IconList;
