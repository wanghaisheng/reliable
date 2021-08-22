import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  useDisclosure,
  Code,
  Text,
  Link,
} from '@chakra-ui/core';

const EditSiteModal = ({ siteId, children }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const copyCode = () => {
    navigator.clipboard.writeText(`<iframe src='https://reliable-brown.vercel.app/embed/${siteId}' />`)
    toast({
      title: "Code copié",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: top,
    })
  }

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.500"
        color="white"
        my={4}
        fontWeight="medium"
        _hover={{ bg: 'gray.400' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Votre code d'intégration</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text mb={2}>Voici le code à intégrer, il est à coller à l'emplacement souhaité sur votre site :</Text>
            <Code>{`<iframe src='https://reliable-brown.vercel.app/embed/${siteId}' />`}</Code>
            <Text mt={4}>Consultez la <Link sytle="text-decoration: underline;" target="_blank" href="/docs">documentation</Link> pour connaitre les bonnes pratiques de l'intégration par iFrame.</Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} fontWeight="medium" onClick={copyCode}>
              Copier le code
            </Button>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditSiteModal;
