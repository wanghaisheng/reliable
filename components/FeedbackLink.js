import { Flex, Link, Badge } from '@chakra-ui/core';

import { useTheme } from '@/utils/useTheme';

export default function FeedbackLink({ paths }) {
  const colorMode = useTheme();
  const linkColor = {
    light: 'gray.900',
    dark: 'gray.100'
  };

  return (
    <Flex
      align={['flex-start', 'center']}
      justifyContent="space-between"
      mb={8}
      width="full"
      mt={1}
      direction={['column', 'row']}
    >
      <Link
        color={linkColor[colorMode]}
        fontWeight="bold"
        fontSize="sm"
        href={`/site/${paths.join('/')}`}
        target="_blank"
      >
        Laisser un commentaire →
      </Link>
      <Link fontSize="xs" color="gray.500" href="/" target="_blank">
        via Reliable <Badge mt="-3px" fontSize="0.7em">BETA</Badge>
      </Link>
    </Flex>
  );
}
