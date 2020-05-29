import React from 'react';
import { KeyValue } from '../types/types';
import Card from './Card';
import Label from '../Inputs/Label';
import FormLine from './FormLine';
import { useStore } from '../store/store';
import { cardStyles } from '../styles/styles';

type Props = {
  id: string;
  title?: string;
};
const Profile = ({ id, title }: Props) => {
  const path = ['profiles', id];
  const classes = cardStyles();
  const [profile, setProfile] = useStore(path, []);
  const header = <div className={classes.headerBlue}>{title}</div>;
  return (
    <Card header={header} xs={12} md={5} lg={3} className={classes.profile}>
      {Object.keys(profile).map((key) => (
        <FormLine key={key} label={key} labelSize={3}>
          <Label label={profile[key]} />
        </FormLine>
      ))}
    </Card>
  );
};

export default Profile;
