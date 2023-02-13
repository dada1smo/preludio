import Icon from '@/components/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FunctionComponent } from 'react';

export interface IconListItemProps {
  icon: IconProp;
  name: string;
  text: string;
}

const IconListItem: FunctionComponent<IconListItemProps> = ({ icon, text }) => {
  return (
    <li className="flex items-center gap-2">
      <span className="text-alt-500">
        <Icon icon={icon} />
      </span>
      <span className="text-main-500 font-sans">{text}</span>
    </li>
  );
};

export default IconListItem;
