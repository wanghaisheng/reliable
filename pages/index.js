import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link';
import { useAuth } from '@/lib/auth';

import { Box, Button, Flex, IconButton, Text, Heading, Avatar, Image, Link, useColorMode, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'

import { createBreakpoints } from '@chakra-ui/theme-tools'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Home() {
  const { user } = useAuth();

  const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

  const bandDesktop = useColorModeValue("band-desktop.png", "band-desktop-dark.png")
  const bandMobile = useColorModeValue("band-mobile.png", "band-mobile-dark.png")
  const watchImage = useColorModeValue("url(watch.jpg)", "url(watch-dark.jpg)")
  const conversion = useColorModeValue("conversion.svg", "conversion-dark.svg")
  const fideliser = useColorModeValue("fideliser.svg", "fideliser-dark.svg")
  const reputation = useColorModeValue("reputation.svg", "reputation-dark.svg")

  return (
    <>
      <Navbar />

      <Flex as="main" mt={["150px", "200px", "220px"]} direction="column" align="center" w="100%">
        <Box maxW="900px">
          <Flex direction="column" align="center" maxW={["300px", "740px"]}>
            <Heading fontFamily="Work Sans" letterSpacing="-3px" lineHeight={["3rem", "4.5rem"]} textAlign="center" fontSize={["48px", "64px"]}>Le <span className="gradientText">succès</span> de votre marque dépend de la voix de vos <span className="gradientText">clients</span></Heading>
            <Text my={4} fontWeight="medium" opacity=".7" textAlign="center">Reliable aide à convaincre vos consomateurs à l’aide d’avis 100% vérifiés <br /> grâce à des outils rapides, légers, contrôlables et open sources !</Text>
            <Button
              as="a"
              href={user ? '/sites' : '/login'}
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              height="50px"
              px={6}
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.97)'
              }}
            >
              {user ? 'Retour au tableau de bord' : 'Commencer gratuitement'}
            </Button>
            {!user && <Text opacity=".7" mt={2} fontSize="xs">14 jours d&rsquo;essai offerts</Text>}
          </Flex>
        </Box>

        <Image alt="" mt={['50px', '30px']} display={["none", "block"]} src={bandDesktop} />
        <Image alt="" mt={['50px', '30px']} display={["block", "none"]} src={bandMobile} />

        <Box maxW="900px" mt={[24, 48]}>
          <Flex direction="column" align="center">
            <Heading maxW={["300px", "450px"]} fontWeight="700" fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "2.2rem"]} textAlign="center" fontSize={["32px", "36px"]}>Bénéfices clés de l’utilisation d’un système d’avis</Heading>
            <Flex
              mt={12}
              direction={["column", "column", "row"]}
              transform={["0", "0", "translateX(-20px)"]}>
              <Flex direction="column" align="center">
                <Image alt="" src={conversion} height="70px" width="100px" />
                <Text fontWeight='600' mt={2}>Augmenter le taux de conversion</Text>
              </Flex>
              <Flex px={[0, 0, 16]} py={[12, 12, 0]} direction="column" align="center">
                <Image alt="" src={fideliser} height="70px" width="100px" />
                <Text fontWeight='600' mt={4}>Fidéliser votre clientèle</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image alt="" src={reputation} height="70px" width="100px" />
                <Text fontWeight='600' mt={4}>Gérer votre e-reputation</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="row" w="100%" mt={[12, 48]}>
        <Flex pl={[0, 0, "15%"]} w={["70%", "70%", "40%"]} m={"auto"} direction="column" justifyContent="center">
          <Heading mb={8} mt="-50px" fontWeight="600" fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "2.2rem"]} textAlign={["center", "center", "left"]} fontSize={["32px", "36px"]}>
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
          <Box
            className="BigBlackBox"
            borderRadius="50px 0 0 50px"
            width={["0%", "0%", "90%"]}
            background={watchImage}
            backgroundSize="cover"
            backgroundPosition="25% 50%"
          />
        </Flex>
      </Flex>

      <Flex mt={[8, 32]} mb={8} direction="column" align="center" w="100%">
        <Box maxW="900px">
          <Flex direction="column" align="center" maxW={["300px", "600px"]}>
            <Heading fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "3rem"]} textAlign="center" fontSize={["32px", "48px"]}>Laissez vos <span className="gradientText">clients</span> vendre votre affaire !</Heading>
            <Text my={4} fontWeight="medium" opacity=".7" textAlign="center">Commencez gratuitement, progressons ensemble.</Text>
            <Button
              as="a"
              href={user ? '/sites' : '/login'}
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              height="50px"
              px={6}
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.97)'
              }}
            >
              {user ? 'Retour au tableau de bord' : 'Commencer gratuitement'}
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  )
}

export default Home;
