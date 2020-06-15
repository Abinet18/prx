import React from 'react';
import ReactModal from 'react-modal';

import { cardStyles } from '../../styles/styles';
import PostForm from './PostForm';
import GridContainer from '../../Views/GridContainer';
import { useStore } from '../../store/store';

const PostFormModal = () => {
  const classes = cardStyles();
  const [open, setOpen] = useStore(['postopen'], false);
  const [curPostPath] = useStore(['curPostPath'], ['newPost']);

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
        <PostForm path={curPostPath} />
      </GridContainer>
    </ReactModal>
  );
};

export default PostFormModal;
