import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import routes from '../contexts/routes';
import {
  Flex,
  Image,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/core';

const Header: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <Flex justifyContent="space-between" px={{ base: 4, md: 16 }} pt={8}>
      <Image height="40px" src="/logo.svg" />
      <ListRoutes isDesktop={isDesktop} />
    </Flex>
  );
};

const ListRoutes: React.FC<{ isDesktop: boolean }> = (props) => (
  <>
    {props.isDesktop ? (
      <nav>
        {routes.map((route) => (
          <Link
            key={route.name}
            href={{
              pathname: `/${route.name.toLowerCase().replace(' ', '-')}`,
            }}
          >
            <ChakraLink ml={5} _hover={null}>
              {route.name}
            </ChakraLink>
          </Link>
        ))}
      </nav>
    ) : (
      <>
        <Menu>
          <MenuButton
            border="2px solid #000"
            borderRadius={8}
            p={2}
            px={4}
            fontWeight="bold"
          >
            Menu
          </MenuButton>
          <MenuList>
            {routes.map((route) => (
              <MenuItem key={route.name}>
                <Link
                  key={route.name}
                  href={{
                    pathname: `/${route.name.toLowerCase().replace(' ', '-')}`,
                  }}
                >
                  <ChakraLink _hover={null}>{route.name}</ChakraLink>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </>
    )}
  </>
);

export default Header;
