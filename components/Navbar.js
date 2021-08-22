import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Badge, Text, Link, Icon } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const Navbar = ({ children }) => {
  const auth = useAuth();

  return (
    <Box py={8} px={4}>
        <Flex as="nav" direction="row" justify="space-between" maxW="1100px" margin="0 auto">
        <NextLink href="/" passHref>
          <Link>
            <Flex direction="row" align="center">
              <Icon color="black" name="logo" size="30px" mb={2} />
              <Text fontFamily="Work Sans" letterSpacing="-1px" ml='5px' fontWeight="medium" fontSize="20px">Reliable</Text>
              <Badge fontSize="0.5em" ml={2}>alpha</Badge>
            </Flex>
          </Link>
        </NextLink>
          <Button
            as="a"
            href={auth.user ? '/sites' : '/login'}
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            maxW="200px"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}>
            Tableau de bord
          </Button>
        </Flex>
      </Box>
  );
};

export default Navbar;
