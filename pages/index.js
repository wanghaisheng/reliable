import { Box, Button, Flex, Icon, Text, Heading, Badge, Image} from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import { getAllFeedback, getSite } from '@/lib/db-admin';
import Footer from '@/components/Footer';

const SITE_ID = process.env.NEXT_PUBLIC_HOME_PAGE_SITE_ID;

export async function getStaticProps(context) {
  const { feedback } = await getAllFeedback(SITE_ID);
  const { site } = await getSite(SITE_ID);

  return {
    props: {
      allFeedback: feedback,
      site
    },
    revalidate: 1
  };
}

const Home = () => {
  const auth = useAuth();

  return (
    <>
      <Box py={8} px={4}>
        <Flex as="nav" direction="row" justify="space-between" maxW="1100px" margin="0 auto">
          <Flex direction="row" align="center">
            <Icon color="black" name="logo" size="30px" mb={2} />
            <Text fontFamily="Work Sans" letterSpacing="-1px" ml='5px' fontWeight="medium" fontSize="20px">Reliable</Text>
            <Badge fontSize="0.5em" ml={2}>alpha</Badge>
          </Flex>
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
      <Flex as="main" mt={16} direction="column" align="center" w="100%">
        <Box maxW="900px">
          <Flex direction="column" align="center" maxW={["300px", "740px"]}>
            <Heading  fontFamily="Work Sans" letterSpacing="-3px" lineHeight={["3rem", "4.5rem"]}textAlign="center" fontSize={["48px", "64px"]}>Le succès de votre marque dépend de la voix de vos clients.</Heading>
            <Text my={4} fontWeight="medium" opacity=".7" textAlign="center">Reliable aide à convaincre vos consomateurs à l’aide d’avis 100% vérifiés <br/> grâce à des outils rapides, légers, contrôlables et open source !</Text>
             <Button
                as="a"
                href={auth.user ? '/sites' : '/login'}
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                height="50px"
                px={6}
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)'
                }}
            >
              {auth.user ? 'Retour au tableau de bord' : 'Commencer gratuitement'}
            </Button>
            <Text opacity=".7" mt={2} fontSize="xs">{auth.user ? null : "14 jours d'essai offerts"}</Text>
          </Flex>
        </Box>
        <Image mt={['50px', '30px']} src="/test.png"/>
        <Box maxW="900px" mt={24}>
          <Flex direction="column" align="center" maxW={["300px", "450px"]}>
            <Heading fontWeight="600"  fontFamily="Work Sans" letterSpacing={["-2px", "-3px"]} lineHeight={["2rem", "3rem"]} textAlign="center" fontSize={["24px", "36px"]}>Bénéfices clés de l’utilisation d’un système d’avis</Heading>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
