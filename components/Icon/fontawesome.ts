const { library, config } = require('@fortawesome/fontawesome-svg-core');
import {
  faAngleDown,
  faAngleRight,
  faCheck,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(
  faAngleDown,
  faAngleRight,
  faTwitter,
  faFontAwesome,
  faCheck,
  faArrowLeft,
  faArrowRight
);
