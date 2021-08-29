import { Box, Button, Flex, Icon, Text, Heading, Badge, Image, Link } from '@chakra-ui/core';

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
      <Box py={4} px={4} position="fixed" w="100%" zIndex="99">
        <Flex 
          as="nav" 
          direction="row" 
          justify="space-between" 
          maxW="950px" 
          margin="0 auto"
          className="glassbg"
          p={["18px 22px","20px 30px"]} /* mettre 22px de bordure sur l'axe X en mobile */
        >
          <Flex direction="row" align="center">
            <Icon color="black" name="logo" size={["20px","30px"]} mb={2} />
            <Text fontFamily="Work Sans" letterSpacing="-1px" ml='5px' fontWeight="medium" fontSize={["16px","20px"]}>Reliable</Text>
            <Badge fontSize={["0.4em","0.5em"]} ml={2}>alpha</Badge>
          </Flex>
          <Box>
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
          </Box>
        </Flex>
      </Box>
      
      <Flex as="main" mt="200px" direction="column" align="center" w="100%">
        <Box maxW="900px">
          <Flex direction="column" align="center" maxW={["300px", "740px"]}>
            <Heading  fontFamily="Work Sans" letterSpacing="-3px" lineHeight={["3rem", "4.5rem"]}textAlign="center" fontSize={["48px", "64px"]}>Le succès de votre marque dépend de la voix de vos clients.</Heading>
            <Text my={4} fontWeight="medium" opacity=".7" textAlign="center">Reliable aide à convaincre vos consomateurs à l’aide d’avis 100% vérifiés <br/> grâce à des outils rapides, légers, contrôlables et open sources !</Text>
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

        <Image mt={['50px', '30px']} display={["none", "block"]} src="/test.png"/>
        <Image mt={['50px', '30px']} display={["block", "none"]} src="/test_mobile.png"/>

        <Box maxW="900px" mt={[24, 48]}>
          <Flex direction="column" align="center">
            <Heading  maxW={["300px", "450px"]} fontWeight="600" fontWeight="700" fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "2.2rem"]} textAlign="center" fontSize={["32px", "36px"]}>Bénéfices clés de l’utilisation d’un système d’avis</Heading>
            <Flex 
              mt={12} 
              direction={["column", "column" ,"row"]}
              transform={["0", "0", "translateX(-20px)"]}>
              <Flex direction="column" align="center">
                <Box borderRadius="15px" w="150px" h="90px" bg="black" />
                <Text fontWeight='600' mt={4}>Augmenter le taux de conversion</Text>
              </Flex>
              <Flex px={[0,0,16]} py={[12,12,0]} direction="column" align="center">
                <Box borderRadius="15px" w="150px" h="90px" bg="black" />
                <Text fontWeight='600' mt={4}>Fidéliser votre clientèle</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Box borderRadius="15px" w="150px" h="90px" bg="black" />
                <Text fontWeight='600' mt={4}>Gérer votre e-reputation</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="row" w="100%" mt={[12, 48]}>
          <Flex pl={[0,0,"15%"]} w={["70%", "70%" ,"40%"]} m={"auto"} direction="column" justifyContent="center">
            <Heading mb={8}  mt="-50px" fontWeight="600" fontWeight="700" fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "2.2rem"]} textAlign={["center","center","left"]} fontSize={["32px", "36px"]}>
              Un outil à la hauteur de vos attentes.
            </Heading>
            <Text fontWeight="600">
              <b>Robuste.</b> Chargement rapide. Ajoutez un site en quelques secondes. 
              Recevez des commentaires immédiatements.
              <br/><br/>
              <b>Léger.</b> Ne surcharge pas votre site.
              <br/><br/>
              <b>Profitable.</b> En alpha, notre plan illimité
              ne coûte que 8€ par mois.</Text>
          </Flex>
          <Flex w={["0%", "0%","60%"]} h="550px" justifyContent="flex-end">
              <Box borderRadius="50px 0 0 50px" width={["0%", "0%","90%"]} background="black" />
          </Flex>
        </Flex>

        <Flex mt={[12, 32]} mb={8} direction="column" align="center" w="100%">
        <Box maxW="900px">
          <Flex direction="column" align="center" maxW={["300px", "600px"]}>
            <Heading  fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "3rem"]}textAlign="center" fontSize={["32px", "48px"]}>Laissez vos clients vendre votre affaire !</Heading>
            <Text my={4} fontWeight="medium" opacity=".7" textAlign="center">Commencez gratuitement, progressons ensemble.</Text>
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
          </Flex>
        </Box>
        </Flex>
      <Footer />
    </>
  );
};

export default Home;
