import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface NavLink {
    icon: IconProp;
    url?: string;
    name: string;
    size?: SizeProp;
    route: {
    };
  }