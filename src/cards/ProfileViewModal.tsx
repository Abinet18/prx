import React from 'react';
import ReactModal from 'react-modal';

import { cardStyles } from '../styles/styles';
import GridContainer from '../Views/GridContainer';
import { useStore } from '../store/store';
import Profile from './Profile';

type Props = {
  onRemoveProfile: (id: string) => void;
};

const ProfileViewModal = ({ onRemoveProfile }: Props) => {
  const classes = cardStyles();
  const [view, setView] = useStore(['view'], false);
  const [curPath] = useStore(['curPath'], ['newProfile']);

  if (!view) {
    return null;
  }
  const onClose = () => {
    setView(false);
  };

  return (
    <ReactModal
      className={classes.modal}
      isOpen={view}
      onRequestClose={onClose}>
      <GridContainer alignItems={'center'} justify={'center'} xs={12}>
        <Profile
          id={curPath[curPath.length - 1]}
          onRemoveProfile={onRemoveProfile}
          viewModal
        />
      </GridContainer>
    </ReactModal>
  );
};

export default ProfileViewModal;
