import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Text, Link, useColorMode, useColorModeValue, Avatar, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { useAuth } from '@/lib/auth';

const Navbar = ({ children }) => {
  const { user } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  const navWp = useColorModeValue("rgba(245,245,245,.8)", "rgba(20, 24, 33, 0.9)")
  const navBorder = useColorModeValue("rgba(255,255,255,1)", "rgba(26,32,44,1)")
  const logoColor = useColorModeValue("black", "white")

  return (
    <Box py={4} px={4} position="fixed" w="100%" zIndex="99">
      <Flex
        as="nav"
        direction="row"
        justify="space-between"
        maxW="950px"
        margin="0 auto"
        className="glassbg"
        borderColor={navBorder}
        backgroundColor={navWp}
        p={["18px 22px", "20px 30px"]} /* mettre 22px de bordure sur l'axe X en mobile */
      >
        <Flex as="a" href="/" direction="row" align="center">
          <Box mb='2px'>
            <svg width="20" height="30" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-6.31972e-07 39.2697L0 10.354L30 39.2697L-6.31972e-07 39.2697Z" fill={logoColor} />
              <path d="M15.0002 24.759C18.2595 24.759 21.3852 23.4548 23.6899 21.1332C25.9946 18.8115 27.2893 15.6628 27.2893 12.3795C27.2893 9.09627 25.9946 5.94749 23.6899 3.62588C21.3852 1.30427 18.2595 2.98403e-07 15.0002 -2.68588e-07L15.0002 12.3795L15.0002 24.759Z" fill={logoColor} />
            </svg>
          </Box>
          <Text fontFamily="Work Sans" letterSpacing="-1px" ml='10px' fontWeight="medium" fontSize={["18px", "20px"]}>Reliable</Text>
          {/*<Badge fontSize={["0.4em", "0.5em"]} ml={2}>alpha</Badge>*/}
        </Flex>
        <Box display={["none", "none", "inline", "inline"]}>
          <Link href="/tarifs" fontWeight={400}>Tarifs</Link>
          <Link target="_blank" href="https://docs.reliable.to/" fontWeight={400} mx={5}>Documentation</Link>
          {!user ?
            <Button
              as="a"
              href="/login"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              p="10px 20px"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.97)'
              }}
              maxW="200px"
            >
              Tableau de bord
            </Button> :
            <NextLink href="/sites" passHref>
              <Link>
                <Avatar size="sm" src={user?.photoUrl} />
              </Link>
            </NextLink>
          }
          <IconButton
            size='sm'
            variant='ghost'
            ml={4}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </Box>
        <Box display={["flex", "flex", "none", "none"]} alignItems="center">
          <IconButton
            size='md'
            mr={4}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
          <Menu>
            <MenuButton
              aria-label='Menu'
              w={12}
              h={12}
            >
              <Avatar size="md" src={user?.photoUrl} />
            </MenuButton>
            <MenuList background={navBorder} w="90vw" mr="5vw" mt={2}>
              <MenuItem>
                <Link href="/sites" fontSize={17} fontWeight={500}>Tableau de bord</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link href="/tarifs" fontSize={17} fontWeight={500}>Tarifs</Link>
              </MenuItem>
              <MenuItem>
                <Link target="_blank" href="https://docs.reliable.to/" fontSize={17} fontWeight={500}>Documentation</Link>
              </MenuItem>
              <MenuItem>
                <Link fontSize={17} fontWeight={500}>Support & Aide</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
