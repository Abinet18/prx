import React from 'react';
import Card from './Card';
import { cardStyles } from '../styles/styles';
import GridItem from '../Views/GridItem';
import AddButton from '../Buttons/AddButton';
import { useStore, setInternal } from '../store/store';

const AddProfile = () => {
  const classes = cardStyles();
  const [, setOpen] = useStore(['open'], false);
  const [, setCurPath] = useStore(['curPath'], ['newProfile']);

  const onClick = () => {
    setOpen(true);
    setInternal(['view'], false);
    setCurPath(['newProfile']);
  };

  const header = <div className={classes.headerBlue}>Add Profile</div>;
  const footer = <div className={classes.footerNoBkg}></div>;
  return (
    <Card
      header={header}
      xs={12}
      sm={6}
      lg={4}
      className={classes.profile}
      footer={footer}>
      <GridItem xs className={classes.profileBody}>
        <AddButton onClick={onClick} label={'Add Profile'} />
      </GridItem>
    </Card>
  );
};

export default AddProfile;
