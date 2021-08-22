import useSWR from 'swr';
import { useState } from 'react';
import {
  Avatar,
  Heading,
  Box,
  Button,
  Flex,
  Text,
  Badge,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tooltip
} from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { goToBillingPortal } from '@/lib/db';
import Page from '@/components/Page';
import DashboardShell from '@/components/DashboardShell';

const FeedbackUsage = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);
  const nbFeedback = data?.feedback.length;
  
  return(
    <StatGroup>
      <Stat>
        <StatLabel color="gray.700">Commentaires</StatLabel>
        <StatNumber fontWeight="medium">{nbFeedback}/∞</StatNumber>
        <StatHelpText>
          Aucune limitation 
          <Tooltip placement="top" label="Cette fonctionnalité est suceptible de changer après la Beta.">
            <Badge fontSize="0.6em">beta</Badge>
          </Tooltip>
        </StatHelpText>
      </Stat>

      <Stat>
        <StatLabel color="gray.700">Sites</StatLabel>
        <StatNumber fontWeight="medium">1/∞</StatNumber>
        <StatHelpText>
          Aucune limitation 
          <Tooltip placement="top" label="Cette fonctionnalité est suceptible de changer après la Beta.">
            <Badge fontSize="0.6em">beta</Badge>
          </Tooltip>
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
};

const SettingsTable = ({ stripeRole, children }) => (
  <Box
    backgroundColor="white"
    mt={8}
    borderRadius={[0, 8, 8]}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
  >
    <Flex
      backgroundColor="gray.50"
      borderTopLeftRadius={[0, 8, 8]}
      borderTopRightRadius={[0, 8, 8]}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      px={6}
      py={4}
    >
      <Flex justify="space-between" align="center" w="full">
        <Text
          textTransform="uppercase"
          fontSize="xs"
          color="gray.500"
          fontWeight="medium"
          mt={1}
        >
          Paramètres de votre compte
        </Text>
        <Badge h="1rem" variantColor="blue">
          {stripeRole}
        </Badge>
      </Flex>
    </Flex>
    <Flex direction="column" p={6}>
      {children}
    </Flex>
  </Box>
);

const Account = () => {
  const { user, signout } = useAuth();
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <DashboardShell>
      <Flex
        direction="column"
        maxW="600px"
        align={['left', 'center']}
        margin="0 auto"
      >
        <Flex direction="column" align={['left', 'center']} ml={4}>
          <Avatar
            w={['3rem', '6rem']}
            h={['3rem', '6rem']}
            mb={4}
            src={user?.photoUrl}
          />
          <Heading letterSpacing="-1px">{user?.name}</Heading>
          <Text>{user?.email}</Text>
        </Flex>
        <SettingsTable stripeRole={user?.stripeRole}>
          <FeedbackUsage />
          <Text my={4}>
            Reliable utilise Stripe pour mettre à jour, modifier ou annuler votre abonnement. 
            Vous pouvez également mettre à jour les informations de la carte et l'adresse de
            facturation via le portail sécurisé.
          </Text>
          <Flex justify="flex-end">
            <Button variant="ghost" ml={4} onClick={() => signout()}>
              Déconnexion
            </Button>
            <Button
              onClick={() => {
                setBillingLoading(true);
                goToBillingPortal();
              }}
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              ml={4}
              isLoading={isBillingLoading}
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              Paramètres de facturation
            </Button>
          </Flex>
        </SettingsTable>
      </Flex>
    </DashboardShell>
  );
};

const AccountPage = () => (
  <Page name="Mon compte" path="/account">
    <Account />
  </Page>
);

export default AccountPage;
