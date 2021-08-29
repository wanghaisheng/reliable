import React from 'react';
import NextLink from 'next/link';
import { Link, Flex, useColorMode, Button } from '@chakra-ui/core';

const Footer = () => {

  return (
    <Flex pb={8} pt={24} justify="center" margin='auto' textAlign="center" direction={["column","row"]}>
      <NextLink href="/privacy" passHref>
        <Link my={2} fontSize="sm" mr={[0, 4]} fontWeight="medium" color="gray.500">
          Confidentialité
        </Link>
      </NextLink>
      <NextLink href="/terms" passHref>
        <Link my={2} fontSize="sm" mr={[0, 4]} fontWeight="medium" color="gray.500">
          Conditions
        </Link>
      </NextLink>
      <NextLink href="/docs" passHref>
        <Link my={2} fontSize="sm" mr={[0, 4]} fontWeight="medium" color="gray.500">
          Documentation
        </Link>
      </NextLink>
      <NextLink href="/tarifs" passHref>
        <Link my={2} fontSize="sm" mr={[0, 4]} fontWeight="medium" color="gray.500">
          Tarifs
        </Link>
      </NextLink>
      <NextLink href="/" passHref>
        <Link my={2} fontSize="sm" mr={[0, 4]} fontWeight="medium" color="gray.500">
          Accueil
        </Link>
      </NextLink>
    </Flex>
  );
};

export default Footer;
