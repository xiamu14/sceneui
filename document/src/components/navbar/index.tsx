import Image from 'next/image';
import { Badge } from '@sceneui/badge';
import { NavContent, NavMainLayout } from './style';
import Space from '@sceneui/space';

const Navbar = () => {
  return (
    <NavMainLayout>
      <NavContent isDetached>
        <Image src="/sceneui.svg" alt="logo" width="100px" height="60px" />
        <Space x="10px" />
        <Badge>BETA</Badge>
      </NavContent>
    </NavMainLayout>
  );
};

export default Navbar;
