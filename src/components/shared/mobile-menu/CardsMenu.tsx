import { homeMegaMenuColumns } from '@/data/header';
import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';
const homepages = [...homeMegaMenuColumns[0].items, ...homeMegaMenuColumns[1].items, ...homeMegaMenuColumns[2].items];

const HomeMenu = () => {
  return (
    <MobileMenuItem id="cards" title="Cards" hasSubmenu={false}>
    </MobileMenuItem>
  );
};

HomeMenu.displayName = 'HomeMenu';

export default HomeMenu;
