import { Box, Button, Flex, Stack, Icon, Text, Badge, useColorModeValue } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import Page from '@/components/Page';

import { FaGoogle, FaGithub } from 'react-icons/fa';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Login = () => {
  const auth = useAuth();

  const backgroundColor = useColorModeValue("rgb(247, 250, 252)", "rgb(19, 23, 32)")
  const logoColor = useColorModeValue("black", "white")

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
    >
      <Stack
        backgroundColor={backgroundColor}
        borderRadius={[0, 8]}
        maxWidth="400px"
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        w="100%"
      >
        <Flex justify="center">
          <Flex mb={4} align="center" aria-label="Retour à l'accueil">
            <svg width="38" height="38" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-6.31972e-07 39.2697L0 10.354L30 39.2697L-6.31972e-07 39.2697Z" fill={logoColor} />
              <path d="M15.0002 24.759C18.2595 24.759 21.3852 23.4548 23.6899 21.1332C25.9946 18.8115 27.2893 15.6628 27.2893 12.3795C27.2893 9.09627 25.9946 5.94749 23.6899 3.62588C21.3852 1.30427 18.2595 2.98403e-07 15.0002 -2.68588e-07L15.0002 12.3795L15.0002 24.759Z" fill={logoColor} />
            </svg>
            <Text fontFamily="Work Sans" letterSpacing="-1px" ml='5px' fontWeight="medium" fontSize="20px">Reliable</Text>
            <Badge fontSize="0.5em" ml={2}>alpha</Badge>
          </Flex>
        </Flex>
        <Button
          onClick={() => auth.signinWithGoogle('/sites')}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon={<FaGoogle />}
          h="50px"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.98)'
          }}
        >
          Continuer avec Google
        </Button>
        <Button
          onClick={() => auth.signinWithGitHub('/sites')}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          leftIcon={<FaGithub />}
          h="50px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.98)'
          }}
        >
          Continuer avec GitHub
        </Button>
        <Button mt={2} as="a" href="/" leftIcon={<ArrowBackIcon />} variant='link'>Retour</Button>
      </Stack>
    </Flex >
  );
};

const LoginPage = () => (
  <Page name="Connexion" path="/login">
    <Login />
  </Page>
);

export default LoginPage;
