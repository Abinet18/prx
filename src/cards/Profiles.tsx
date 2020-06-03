import React from 'react';

import Profile from './Profile';
import CardContainer from './CardContainer';
import { useStore, remove } from '../store/store';

import ProfileFormModal from './ProfileFormModal';
import AddProfile from './AddProfile';
import ProfileViewModal from './ProfileViewModal';
import { cardStyles } from '../styles/styles';

const Profiles = () => {
  const [ids, setIds] = useStore(['ids'], []);
  const classes = cardStyles();

  const onRemoveProfile = (id: string) => {
    setIds(ids.filter((cid: string) => cid !== id));
    remove(['profiles', id]);
  };

  return (
    <CardContainer
      xs={12}
      md={8}
      alignItems={'flex-start'}
      justify={'flex-start'}
      className={classes.container}>
      <AddProfile />
      <ProfileFormModal />
      <ProfileViewModal onRemoveProfile={onRemoveProfile} />
      {ids.map((key: string, index: number) => (
        <Profile key={key} id={key} onRemoveProfile={onRemoveProfile} />
      ))}
    </CardContainer>
  );
};

export default Profiles;
