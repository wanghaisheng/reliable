import React from 'react';
import NextLink from 'next/link';
import { Link, Flex, useColorMode, Button } from '@chakra-ui/core';

const Footer = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mb={8} mt={24} justify="center">
      <NextLink href="/privacy" passHref>
        <Link fontSize="sm" mr={4} fontWeight="medium" color="gray.500">
          Confidentialité
        </Link>
      </NextLink>
      <NextLink href="/terms" passHref>
        <Link fontSize="sm" mr={4} fontWeight="medium" color="gray.500">
          Conditions
        </Link>
      </NextLink>
      <NextLink href="/docs" passHref>
        <Link fontSize="sm" mr={4} fontWeight="medium" color="gray.500">
          Documentation
        </Link>
      </NextLink>
      <NextLink href="/tarifs" passHref>
        <Link fontSize="sm" mr={4} fontWeight="medium" color="gray.500">
          Tarifs
        </Link>
      </NextLink>
      <NextLink href="/" passHref>
        <Link fontSize="sm" mr={4} fontWeight="medium" color="gray.500">
          Accueil
        </Link>
      </NextLink>
    </Flex>
  );
};

export default Footer;
