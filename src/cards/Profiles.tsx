import React from 'react';

import Profile from './Profile';
import CardContainer from './CardContainer';
import { useStore, remove } from '../store/store';

import ProfileFormModal from './ProfileFormModal';
import AddProfile from './AddProfile';
import ProfileViewModal from './ProfileViewModal';

const Profiles = () => {
  const [ids, setIds] = useStore(['ids'], []);

  const onRemoveProfile = (id: string) => {
    setIds(ids.filter((cid: string) => cid !== id));
    remove(['profiles', id]);
  };

  return (
    <CardContainer
      xs={12}
      md={8}
      alignItems={'flex-start'}
      justify={'flex-start'}>
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
