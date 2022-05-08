import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    Flex
} from '@chakra-ui/react';
import { FaCheckCircle, FaMinusCircle, FaTimesCircle } from 'react-icons/fa';


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function ThreeTierPricing() {
    return (
        <>
            <Navbar />
            <Box mt='150px' py={12}>
                <VStack spacing={2} textAlign="center">
                    <Heading as="h1" fontSize="48px" lineHeight='1.1em'>
                        Des forfaits adaptés à vos besoins
                    </Heading>
                    <Text fontSize="lg" color={'gray.500'}>
                        Essai gratuit pour les équipes, annulez à tout moment.
                    </Text>
                </VStack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    py={10}>
                    <PriceWrapper>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Pro
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="5xl" fontWeight="600">
                                    9,99
                                </Text>
                                <Text fontSize="3xl" fontWeight="600">
                                    €
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /mois
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    1,000 commentaires /mois
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Configurez jusqu'à 2 sites
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaMinusCircle} color="orange.500" />
                                    Personnalisation simple
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaTimesCircle} color="gray.500" />
                                    Compte personnel
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button
                                    as="a"
                                    variant='outline'
                                    w="full"
                                    href="/login"
                                    fontWeight="medium"
                                    borderColor='blue.500'
                                    _hover={{ bg: 'blue.500', color: 'white' }}
                                    _active={{
                                        bg: 'blue.500'
                                    }}
                                    maxW="200px"
                                >
                                    Commencer l'essai
                                </Button>
                            </Box>
                        </VStack>
                    </PriceWrapper>
                    <PriceWrapper>
                        <Box position="relative">
                            <Box
                                position="absolute"
                                top="-16px"
                                left="50%"
                                style={{ transform: 'translate(-50%)' }}>
                                <Text
                                    textTransform="uppercase"
                                    bg={useColorModeValue('black', 'gray.700')}
                                    px={3}
                                    py={1}
                                    color={useColorModeValue('white', 'gray.200')}
                                    fontSize="sm"
                                    fontWeight="600"
                                    rounded="xl">
                                    Populaire
                                </Text>
                            </Box>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Entreprise
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="5xl" fontWeight="600">
                                        19,99
                                    </Text>
                                    <Text fontSize="3xl" fontWeight="600">
                                        €
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /mois
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={useColorModeValue('gray.50', 'gray.700')}
                                py={4}
                                borderBottomRadius={'xl'}>
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        5,000 commentaires /mois
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Configurez jusqu'à 5 sites
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Personnalisation avancée
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Invitez à collaborer
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Customisez vos iframes
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button
                                        as="a"
                                        w="full"
                                        href="/login"
                                        color="white"
                                        fontWeight="medium"
                                        backgroundColor="blue.500"
                                        _hover={{ bg: 'blue.600' }}
                                        _active={{
                                            bg: 'blue.500'
                                        }}
                                        maxW="200px"
                                    >
                                        Commencer l'essai
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </PriceWrapper>
                </Stack>
            </Box>
            <Flex mt={8} mb={8} direction="column" align="center" w="100%">
                <Box maxW="900px">
                    <Flex direction="column" align="center" maxW={["300px", "600px"]}>
                        <Heading fontFamily="Work Sans" letterSpacing="-2px" lineHeight={["2rem", "3rem"]} fontWeight='600' textAlign="center" fontSize={["32px", "45px"]}>Laissez vos clients vendre votre affaire !</Heading>
                        <Text my={4} fontWeight="500" opacity=".7" textAlign="center">Commencez gratuitement, progressons ensemble.</Text>
                        <Button
                            as="a"
                            href='/login'
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
                            Commencer gratuitement
                        </Button>
                    </Flex>
                </Box>
            </Flex>
            <Footer />
        </>
    );
}