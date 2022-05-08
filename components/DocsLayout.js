import React from 'react';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const DocsLayout = ({ children }) => (
  <>
    <Navbar />
    <Box maxW="680px" mx="auto" px={8} w="100%" className="Docs">
      {children}
    </Box>
    <Footer />
  </>
);

export default DocsLayout;
