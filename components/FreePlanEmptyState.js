import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/core';

import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md">Affichez des commentaires sur votre site instantanément</Heading>
      <Text>Commencez aujourd'hui, grandissez avec-nous 🌱</Text>
      <Button>Passer au plan Pro</Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
