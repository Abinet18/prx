import React from 'react';
import Card from './Card';
import { useStore } from '../store/store';
import { cardStyles } from '../styles/styles';
import GridItem from '../Views/GridItem';

type Props = {
  id: string;
  title?: string;
};
const Profile = ({ id, title }: Props) => {
  const path = ['profiles', id];
  const classes = cardStyles();
  const [profile] = useStore(path, []);
  const header = <div className={classes.headerBlue}>{profile.name}</div>;
  return (
    <Card header={header} xs={12} md={5} lg={3} className={classes.profile}>
      <GridItem
        xs
        className={classes.profileitem}>{`Born on ${profile.bdate}`}</GridItem>
      <GridItem
        xs
        className={
          classes.profileitem
        }>{`${profile.jtitle} at ${profile.cname}`}</GridItem>
      <GridItem xs className={classes.profilequote}>
        {profile.summary}
      </GridItem>
      <GridItem xs className={classes.profilelist}>
        {`Interested in ${profile.interests}`}
      </GridItem>
      <GridItem xs className={classes.profilelist}>
        {`Skilled in ${profile.skills}`}
      </GridItem>
    </Card>
  );
};

export default Profile;
