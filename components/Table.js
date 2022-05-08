import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Th = (props) => (
  <Text
    as="th"
    textTransform="uppercase"
    fontSize="xs"
    fontWeight="medium"
    px={4}
    {...props}
  />
);

export const Td = (props) => (
  <Box
    as="td"
    p={4}
    borderBottom="1px solid rgba(0,0,0,.2)"
    {...props}
  />
);

export const Tr = (props) => (
  <Box
    as="tr"
    borderTopLeftRadius={8}
    borderTopRightRadius={8}
    borderBottom="1px solid  rgba(0,0,0,.2)"
    height="40px"
    {...props}
  />
);

export const Table = (props) => {
  return (
    <Box
      as="table"
      textAlign="left"
      ml={0}
      mr={0}
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
      {...props}
    />
  );
};
