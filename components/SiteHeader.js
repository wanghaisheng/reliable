import React from 'react';
import NextLink from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box
} from '@chakra-ui/core';

import EditSiteModal from './EditSiteModal';
import LinkEmbedModal from './LinkEmbedModal';

const SiteHeader = ({ isSiteOwner, site, siteId, route, loading }) => {
  const siteName = site?.name;
  
  return (
    <Box mx={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <NextLink href="/sites" passHref>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <NextLink href={`/site/${siteId}`} passHref>
            <BreadcrumbLink>{siteName || '-'}</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
        {siteName && route && (
          <BreadcrumbItem>
            <NextLink href={`/site/${siteId}/${route}`} passHref>
              <BreadcrumbLink>{route}</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>{siteName || '-'}</Heading>
        {isSiteOwner && !loading && (
          <Flex direction="column">
          <EditSiteModal settings={site?.settings} siteId={siteId}>
            Paramètres du site
          </EditSiteModal>
          <LinkEmbedModal settings={site?.settings} siteId={siteId}>
            Code d'intégration
          </LinkEmbedModal>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default SiteHeader;
