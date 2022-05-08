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
} from '@chakra-ui/react';

import { deleteFeedback } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const DeleteFeedbackButton = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = useState();
  const cancelRef = useRef();
  const auth = useAuth();

  const onClose = () => setIsOpen(false);
  const onDelete = () => {
    deleteFeedback(feedbackId);
    mutate(
      ['/api/feedback', auth.user.token],
      async (data) => {
        return {
          feedback: data.feedback.filter(
            (feedback) => feedback.id !== feedbackId
          )
        };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="Delete feedback"
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
            Supprimer le commentaire
          </AlertDialogHeader>
          <AlertDialogBody>
            Êtes-vous sûr ? Vous ne pouvez pas annuler cette action par la suite.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Annuler
            </Button>
            <Button fontWeight="bold" variantColor="red" onClick={onDelete} ml={3}>
              Supprimer
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteFeedbackButton;
