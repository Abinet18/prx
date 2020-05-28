import React from 'react';

import Profile from './Profile';
import CardContainer from './CardContainer';
import { useStore } from '../store/store';
import { KeyValue } from '../types/types';
import Form from './Form';
import { form } from '../data/data';

const Profiles = () => {
  const [index, setIndex] = useStore(['index'], 1);
  const [ids, setIds] = useStore(['ids'], []);
  const [profiles, setProfiles] = useStore(['profiles'], {});
  const onAddRecord = (profile: KeyValue[]) => {
    const newProfile: KeyValue[] = [];
    profile.forEach((field) => {
      newProfile.push({ ...field });
    });
    const curId = 'profile' + index;
    profiles[curId] = newProfile;
    setProfiles({ ...profiles });
    setIndex(index + 1);
    setIds([...ids, curId]);
  };

  console.log(profiles);

  return (
    <CardContainer xs={8}>
      <Form data={form} onSubmit={onAddRecord} />
      {ids.map((key: string, index: number) => (
        <Profile key={key} id={key} title={key} />
      ))}
    </CardContainer>
  );
};

export default Profiles;
