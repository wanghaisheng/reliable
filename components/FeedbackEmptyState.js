import React from 'react';
import { Heading, Flex, Text } from '@chakra-ui/react';

const FeedbackEmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={2}>
      Vous n'avez reçu aucun commentaire.
    </Heading>
    <Text mb={4}>Partagez votre site ! </Text>
  </Flex>
);

export default FeedbackEmptyState;
