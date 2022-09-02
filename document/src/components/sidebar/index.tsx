import Space from '@sceneui/space';
import { useLocation } from 'react-use';
import Link from 'next/link';
import {
  createElement,
  memo,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import {
  Book,
  ChevronRight,
  Icon,
  Layout,
  Menu as MenuIcon,
  Package,
} from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  H1,
  Menu,
  MenuName,
  MenuItem,
  MenuIconBoard,
} from './style';
import Center from '@sceneui/center';

interface Item {
  name: string;
  href: string;
}

interface Menu {
  name: string;
  items: Item[];
  id: string;
  icon?: Icon;
}

const menus: Menu[] = [
  {
    name: 'Guide',
    icon: Book,
    id: '0',
    items: [
      {
        name: 'Get Started',
        href: '/',
      },
    ],
  },
  {
    name: 'Components',
    id: '1',
    icon: Package,
    items: [
      {
        name: 'Button',
        href: '/component/button',
      },
    ],
  },
  {
    name: 'Layout',
    id: '2',
    icon: Layout,
    items: [
      {
        name: 'Badge',
        href: '/layout/badge',
      },
      {
        name: 'Space',
        href: '/layout/space',
      },
    ],
  },
];

const menuIconVariants = {
  expanded: { rotate: '90deg' },
  closed: { rotate: '0deg' },
};

const Sidebar = () => {
  const [expanded, setExpanded] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const menu = menus.find((menu) => {
        return (
          menu.items.findIndex((item) => item.href === location.pathname) !== -1
        );
      });
      setExpanded(menu?.id);
    }
  }, [location.pathname]);

  const handleExpanded: MouseEventHandler<HTMLDivElement> = (event) => {
    const id = (event.currentTarget as HTMLDivElement).dataset['id'];
    setExpanded((old) => {
      if (old === id) return undefined;
      return id;
    });
  };

  return (
    <Container>
      <H1>Documentation</H1>
      <div>
        {menus.map((menu) => {
          return (
            <div key={menu.id}>
              <Menu data-id={menu.id} onClick={handleExpanded}>
                <MenuIconBoard>
                  {createElement(menu.icon ?? MenuIcon, {
                    size: 14,
                    color: '#4547F6',
                  })}
                </MenuIconBoard>
                <Space x={12} />
                <MenuName isActive={expanded === menu.id}>{menu.name}</MenuName>
                <Space x={8} />
                <motion.div
                  variants={menuIconVariants}
                  animate={expanded === menu.id ? 'expanded' : 'closed'}
                >
                  <Center>
                    <ChevronRight size={18} color="#999" />
                  </Center>
                </motion.div>
              </Menu>

              <AnimatePresence>
                {expanded === menu.id && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'fit-content' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {menu.items.map((item, index) => {
                      return (
                        <MenuItem
                          key={`${menu.id}-${index}`}
                          isActive={item.href === location.pathname}
                        >
                          <Link href={item.href} data-href={item.href}>
                            {item.name}
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default memo(Sidebar);