import { Box, Button, Flex, Stack, Icon, Text, Badge } from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';
import Page from '@/components/Page';

const Login = () => {
  const auth = useAuth();

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      backgroundColor={['white', 'gray.100']}
    >
      <Stack
        backgroundColor="white"
        borderRadius={[0, 8]}
        maxWidth="400px"
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        w="100%"
      >
        <Flex justify="center">
          <Flex as="a" href="/" align="center" aria-label="Retour à l'accueil">
            <Icon color="black" name="logo" size="40px" mb={4} />
            <Text fontFamily="Work Sans" letterSpacing="-1px" ml='5px' fontWeight="medium" fontSize="20px">Reliable</Text>
            <Badge fontSize="0.5em" ml={2}>beta</Badge>
          </Flex>
        </Flex>
        <Button
          onClick={() => auth.signinWithGoogle('/sites')}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon="google"
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
        >
          Continuer avec Google
        </Button>
        <Button
          onClick={() => auth.signinWithGitHub('/sites')}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          leftIcon="github"
          mt={2}
          h="50px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          Continuer avec GitHub
        </Button>
      </Stack>
    </Flex>
  );
};

const LoginPage = () => (
  <Page name="Connexion" path="/login">
    <Login />
  </Page>
);

export default LoginPage;
