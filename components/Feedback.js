import React from 'react';
import { Box, Heading, Text, Divider, Icon, Flex, Code } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import formatRelative from 'date-fns/formatRelative';
import fr from 'date-fns/locale/fr';

import { useTheme } from '@/utils/useTheme';
import MDXComponents from './MDXComponents';

const formatRelativeLocale = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: "PP' à 'p"
};

const locale = {
  ...fr,
  formatRelative: (token) => formatRelativeLocale[token],
};

const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => {
  const colorMode = useTheme();
  const authorColor = {
    light: 'gray.900',
    dark: 'gray.200'
  };
  const textColor = {
    light: 'gray.800',
    dark: 'gray.300'
  };
  const dividerColor = {
    light: 'gray.200',
    dark: 'gray.700'
  };

  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Flex align="center">
        <Heading
          size="sm"
          as="h3"
          mb={0}
          color={authorColor[colorMode]}
          fontWeight="medium"
        >
          {author}
        </Heading>
        {settings?.icons && (
          <Icon name={provider.slice(0, -4)} size="13px" ml="6px" />
        )}
      </Flex>
      {settings?.timestamp && (
        <Text color="gray.500" mb={4} fontSize="xs">
          {formatRelative(new Date(createdAt), new Date(), { locale })}
        </Text>
      )}
      <Box color={textColor[colorMode]}>
        <ReactMarkdown
          source={text}
          renderers={{
            paragraph: MDXComponents.p,
            blockquote: MDXComponents.blockquote,
            link: MDXComponents.a,
            list: MDXComponents.ul,
            listItem: MDXComponents.li,
            table: MDXComponents.table,
            tableHead: MDXComponents.th,
            tableCell: MDXComponents.td,
            code: ({ value }) => (
              <pre>
                <Code borderRadius={8} p={4} my={4}>
                  {value}
                </Code>
              </pre>
            ),
            inlineCode: MDXComponents.inlineCode
          }}
        />
      </Box>
      {!isLast && (
        <Divider borderColor={dividerColor[colorMode]} mt={6} mb={6} />
      )}
    </Box>
  );
};

export default Feedback;
