import React from 'react';

import Profile from './Profile';
import CardContainer from './CardContainer';
import { useStore, add, clear } from '../store/store';

import Form from './Form';
import { profileForm } from '../data/data';

const Profiles = () => {
  const [index, setIndex] = useStore(['index'], 1);
  const [ids, setIds] = useStore(['ids'], []);

  const onAddRecord = () => {
    const curId = 'profile' + index;
    add(['profiles', curId], ['newProfile']);
    setIndex(index + 1);
    setIds([...ids, curId]);
    clear(['newProfile']);
  };

  return (
    <CardContainer xs={12} md={8} alignItems={'flex-start'}>
      <Form data={profileForm} onSubmit={onAddRecord} />
      {ids.map((key: string, index: number) => (
        <Profile key={key} id={key} title={key} />
      ))}
    </CardContainer>
  );
};

export default Profiles;
