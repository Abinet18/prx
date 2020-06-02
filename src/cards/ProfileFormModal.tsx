import React from 'react';
import ReactModal from 'react-modal';

import { cardStyles } from '../styles/styles';
import Form from './Form';
import GridContainer from '../Views/GridContainer';
import { useStore } from '../store/store';

const ProfileFormModal = () => {
  const classes = cardStyles();
  const [open, setOpen] = useStore(['open'], false);
  const [curPath] = useStore(['curPath'], ['newProfile']);

  if (!open) {
    return null;
  }
  const onClose = () => {
    setOpen(false);
  };

  return (
    <ReactModal
      className={classes.modal}
      isOpen={open}
      onRequestClose={onClose}>
      <GridContainer alignItems={'center'} justify={'center'} xs={12}>
        <Form path={curPath} />
      </GridContainer>
    </ReactModal>
  );
};

export default ProfileFormModal;
