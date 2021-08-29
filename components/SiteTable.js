import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/core';

import formatRelative from 'date-fns/formatRelative';
import fr from 'date-fns/locale/fr';

import { Table, Tr, Th, Td } from './Table';
import DeleteSiteButton from './DeleteSiteButton';

const formatRelativeLocale = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: 'PPp'
};

const locale = {
  ...fr,
  formatRelative: (token) => formatRelativeLocale[token],
};

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX="scroll">
      <Table w="full">
        <thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Lien du site</Th>
            <Th>Lien des commentaires</Th>
            <Th>Date d'ajout</Th>
            <Th width="50px">{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site, index) => (
            <Box as="tr" key={site.id}>
              <Td>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link id={`site-table-link-${index}`} fontWeight="medium">
                    {site.name}
                  </Link>
                </NextLink>
              </Td>
              <Td>
                <Link href={site.url} isExternal>
                  {site.url}
                </Link>
              </Td>
              <Td>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link color="blue.500" fontWeight="medium">
                    Voir les commentaires
                  </Link>
                </NextLink>
              </Td>
              <Td>{formatRelative(new Date(site.createdAt), new Date(), { locale })}</Td>
              <Td>
                <DeleteSiteButton siteId={site.id} />
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;
