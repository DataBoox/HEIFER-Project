import { IconType } from 'react-icons';

export interface LinkItemProps {
    name: string;
    icon: IconType;
    path?: string;
    dropdown?: Array<LinkItemProps>;
}