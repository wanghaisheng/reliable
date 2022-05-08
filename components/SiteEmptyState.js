import React from 'react';
import { Heading, Flex, Text } from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
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
      Vous n'avez ajouté aucun site.
    </Heading>
    <Text mb={4}>Commençons dès maintenant.</Text>
    <AddSiteModal>Ajouter mon premier site</AddSiteModal>
  </Flex>
);

export default EmptyState;
