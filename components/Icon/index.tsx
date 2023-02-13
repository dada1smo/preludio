import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

interface IconProps {
  icon: IconProp;
  classes?: string;
}

const Icon: FunctionComponent<IconProps> = ({ icon, classes }) => {
  return <FontAwesomeIcon icon={icon} className={classes} />;
};

export default Icon;
