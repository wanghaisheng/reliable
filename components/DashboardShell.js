import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Flex, Link, Avatar, Icon, Badge } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import Footer from './Footer';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #9EE493"
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
                  <Icon name="logo" size="24px" />
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
