import React, { useState, useRef } from 'react';
import { mutate } from 'swr';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Button
} from '@chakra-ui/core';

import { deleteSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const DeleteSitebutton = ({ siteId }) => {
  const [isOpen, setIsOpen] = useState();
  const cancelRef = useRef();
  const auth = useAuth();

  const onClose = () => setIsOpen(false);
  const onDelete = () => {
    deleteSite(siteId);
    mutate(
      ['/api/sites', auth.user.token],
      async (data) => {
        return {
          sites: data.sites.filter((site) => site.id !== siteId)
        };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Delete site"
        icon="delete"
        variant="ghost"
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Attention !
          </AlertDialogHeader>
          <AlertDialogBody>
            Êtes-vous sûr ? Cela supprimera également tous les commentaires laissés sur ce site.
            Vous ne pourrez pas annuler cette action par la suite.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Annuler
            </Button>
            <Button
              fontWeight="bold"
              variantColor="red"
              onClick={onDelete}
              ml={3}
            >
              Supprimer le site
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteSitebutton;
