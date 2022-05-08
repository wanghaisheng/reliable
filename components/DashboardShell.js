import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Flex, Link, Avatar, Icon, Badge, IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { useAuth } from '@/lib/auth';
import Footer from './Footer';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();
  const dashNavBg = useColorModeValue("rgb(247, 250, 252)", "rgb(19, 23, 32)");
  const logoColor = useColorModeValue("black", "white");

  return (
    <Box h="100vh">
      <Flex
        backgroundColor={dashNavBg}
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #b8d9ed"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <Flex direction="row" align="center">
              <NextLink href="/" passHref>
                <Link>
                  <Flex direction="row">
                    <svg width="20" height="28" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M-6.31972e-07 39.2697L0 10.354L30 39.2697L-6.31972e-07 39.2697Z" fill={logoColor} />
                      <path d="M15.0002 24.759C18.2595 24.759 21.3852 23.4548 23.6899 21.1332C25.9946 18.8115 27.2893 15.6628 27.2893 12.3795C27.2893 9.09627 25.9946 5.94749 23.6899 3.62588C21.3852 1.30427 18.2595 2.98403e-07 15.0002 -2.68588e-07L15.0002 12.3795L15.0002 24.759Z" fill={logoColor} />
                    </svg>
                    <Text letterSpacing="-1px" fontWeight="medium" mt={1} ml={2}>Reliable</Text>
                  </Flex>
                </Link>
              </NextLink>
              <Badge mt={1} ml={2} fontSize="0.5em">alpha</Badge>
            </Flex>
            <NextLink href="/sites" passHref>
              <Link ml={8} mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Commentaires</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <IconButton
              size='sm'
              variant='ghost'
              mr={4}
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={user?.photoUrl} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default DashboardShell;
