import { Box, Button, Flex, Icon, Text, Heading, Badge, Image, Link, useColorMode } from '@chakra-ui/core';
import NextLink from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

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

const infoChangelog = () => {
  toast('Nos changelogs seront bientôt disponibles.', {
    icon: '👨‍💻',
    position: "top",
  });
}

const Home = () => {
  const auth = useAuth();

  // On définie l'instance colorMode qui permet de faire des changements selon le thème selectionné
  const { colorMode } = useColorMode();
  // Les images qui changent selon le thème
  const bandDesktop = { light: "band-desktop.png", dark: "band-desktop-dark.png" }
  const bandMobile = { light: "band-mobile.png", dark: "band-mobile-dark.png" }
  const watchImg = { light: "url(watch.jpg)", dark: "url(watch-dark.jpg)" }
  const conversion = { light: "conversion.svg", dark: "conversion-dark.svg" }
  const fideliser = { light: "fideliser.svg", dark: "fideliser-dark.svg" }
  const reputation = { light: "reputation.svg", dark: "reputation-dark.svg" }

  // Changement de couleurs navigation
  const navWp = { light: "rgba(255,255,255,.8)", dark: "rgba(38,46,65,.8)" }
  const navBorder = { light: "rgba(255,255,255,1)", dark: "rgba(38,46,65,1)" }
  const logoColor = { light: "black", dark: "white" }


  return (
    <>
      <Toaster />
      <Box py={4} px={4} position="fixed" w="100%" zIndex="99">
        <Flex
          as="nav"
          direction="row"
          justify="space-between"
          maxW="950px"
          margin="0 auto"
          className="glassbg"
          borderColor={navBorder[colorMode]}
          backgroundColor={navWp[colorMode]}
          p={["18px 22px", "20px 30px"]} /* mettre 22px de bordure sur l'axe X en mobile */
        >
          <Flex direction="row" align="center">
            <Box mb='2px'>
              <svg width="20" height="30" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-6.31972e-07 39.2697L0 10.354L30 39.2697L-6.31972e-07 39.2697Z" fill={logoColor[colorMode]} />
                <path d="M15.0002 24.759C18.2595 24.759 21.3852 23.4548 23.6899 21.1332C25.9946 18.8115 27.2893 15.6628 27.2893 12.3795C27.2893 9.09627 25.9946 5.94749 23.6899 3.62588C21.3852 1.30427 18.2595 2.98403e-07 15.0002 -2.68588e-07L15.0002 12.3795L15.0002 24.759Z" fill={logoColor[colorMode]} />
              </svg>
            </Box>
            <Text fontFamily="Work Sans" letterSpacing="-1px" ml='10px' fontWeight="medium" fontSize={["16px", "20px"]}>Reliable</Text>
            <Badge fontSize={["0.4em", "0.5em"]} ml={2}>alpha</Badge>
          </Flex>
          <Box>
            <Link display={["none", "none", "inline"]} onClick={infoChangelog} fontWeight="500">Changelog</Link>
            <NextLink href="/tarifs" passHref>
              <Link display={["none", "none", "inline"]} fontWeight="500" mx={10}>Tarifs</Link>
            </NextLink>
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

      <Flex as="main" mt={["150px", "200px", "220px"]} direction="column" align="center" w="100%">
        <Box maxW="900px">
          <Flex direction="column" align="center" maxW={["300px", "740px"]}>
            <Heading fontFamily="Work Sans" letterSpacing="-3px" lineHeight={["3rem", "4.5rem"]} textAlign="center" fontSize={["48px", "64px"]}>Le <span className="gradientText">succès</span> de votre marque dépend de la voix de vos <span className="gradientText">clients</span></Heading>
            <Text my={4} fontWeight="medium" opacity=".7" textAlign="center">Reliable aide à convaincre vos consomateurs à l’aide d’avis 100% vérifiés <br /> grâce à des outils rapides, légers, contrôlables et open sources !</Text>
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

        <Image mt={['50px', '30px']} display={["none", "block"]} src={bandDesktop[colorMode]} />
        <Image mt={['50px', '30px']} display={["block", "none"]} src={bandMobile[colorMode]} />

        <Box maxW="900px" mt={[24, 48]}>
          <Flex direction="column" align="center">
            <Heading maxW={["300px", "450px"]} fontWeight="600" fontWeight="700" fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "2.2rem"]} textAlign="center" fontSize={["32px", "36px"]}>Bénéfices clés de l’utilisation d’un système d’avis</Heading>
            <Flex
              mt={12}
              direction={["column", "column", "row"]}
              transform={["0", "0", "translateX(-20px)"]}>
              <Flex direction="column" align="center">
                <img src={conversion[colorMode]} height="50px" width="100px" />
                <Text fontWeight='600' mt={2}>Augmenter le taux de conversion</Text>
              </Flex>
              <Flex px={[0, 0, 16]} py={[12, 12, 0]} direction="column" align="center">
                <img src={fideliser[colorMode]} height="50px" width="100px" />
                <Text fontWeight='600' mt={4}>Fidéliser votre clientèle</Text>
              </Flex>
              <Flex direction="column" align="center">
                <img src={reputation[colorMode]} height="50px" width="100px" />
                <Text fontWeight='600' mt={4}>Gérer votre e-reputation</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="row" w="100%" mt={[12, 48]}>
        <Flex pl={[0, 0, "15%"]} w={["70%", "70%", "40%"]} m={"auto"} direction="column" justifyContent="center">
          <Heading mb={8} mt="-50px" fontWeight="600" fontWeight="700" fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "2.2rem"]} textAlign={["center", "center", "left"]} fontSize={["32px", "36px"]}>
            Un outil à la hauteur de vos attentes.
          </Heading>
          <Text fontWeight="600">
            <b className="gradientText">Robuste.</b> Chargement rapide. Ajoutez un site en quelques secondes.
            Recevez des commentaires immédiatements.
            <br /><br />
            <b className="gradientText">Léger.</b> Ne surcharge pas votre site.
            <br /><br />
            <b className="gradientText">Profitable.</b> En alpha, notre plan illimité
            ne coûte que 8€ par mois.</Text>
        </Flex>
        <Flex w={["0%", "0%", "60%"]} h="550px" justifyContent="flex-end">
          <Box className="BigBlackBox" borderRadius="50px 0 0 50px" width={["0%", "0%", "90%"]} background={watchImg[colorMode]} backgroundSize="cover" backgroundPosition="25% 50%" />
        </Flex>
      </Flex>

      <Flex mt={[8, 32]} mb={8} direction="column" align="center" w="100%">
        <Box maxW="900px">
          <Flex direction="column" align="center" maxW={["300px", "600px"]}>
            <Heading fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "3rem"]} textAlign="center" fontSize={["32px", "48px"]}>Laissez vos <span className="gradientText">clients</span> vendre votre affaire !</Heading>
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
