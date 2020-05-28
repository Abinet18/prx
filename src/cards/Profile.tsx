import React from 'react';
import { KeyValue } from '../types/types';
import Card from './Card';
import Label from '../Inputs/Label';
import FormLine from './FormLine';
import { useStore } from '../store/store';

type Props = {
  id: string;
  title?: string;
};
const Profile = ({ id, title }: Props) => {
  const path = ['profiles', id];

  const [profile, setProfile] = useStore(path, []);
  console.log(profile, path);
  return (
    <Card title={title} xs={4}>
      {(profile as KeyValue[]).map((field, index) => (
        <FormLine key={field.key} label={field.key} labelSize={3}>
          <Label label={field.value} />
        </FormLine>
      ))}
    </Card>
  );
};

export default Profile;
