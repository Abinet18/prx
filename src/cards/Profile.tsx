import React from 'react';
import Card from './Card';
import { useStore, setInternal } from '../store/store';
import { cardStyles } from '../styles/styles';
import GridItem from '../Views/GridItem';
import EditIconButton from '../IconButtons/EditIconButton';
import AllOutIcon from '@material-ui/icons/AllOut';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIconButton from '../IconButtons/DeleteIconButton';

type Props = {
  id: string;
  onRemoveProfile: (id: string) => void;
  viewModal?: boolean;
};

const Profile = ({ id, onRemoveProfile, viewModal }: Props) => {
  const path = ['profiles', id];
  const classes = cardStyles();
  const [profile] = useStore(path, {});
  const [, setOpen] = useStore(['open'], false);
  const [view, setView] = useStore(['view'], false);
  const onEdit = () => {
    setOpen(true);
    setView(false);
    setInternal(['curPath'], path);
  };

  const onView = () => {
    setView(!view);
    setOpen(false);
    setInternal(['curPath'], path);
  };
  const header = (
    <div className={classes.headerBlue}>
      {!viewModal ? (
        <AllOutIcon onClick={onView} className={classes.leftIcon} />
      ) : (
        <CloseIcon onClick={onView} className={classes.leftIcon} />
      )}
      {profile.name}
    </div>
  );
  const footer = (
    <div className={classes.footerNoBkg}>
      <EditIconButton label={'Edit'} onClick={onEdit} />
      <DeleteIconButton label={'Delete'} onClick={() => onRemoveProfile(id)} />
    </div>
  );

  const summary = (
    <GridItem xs className={classes.profilequote}>
      {viewModal || profile.summary.length <= 150 ? (
        profile.summary
      ) : (
        <>
          {profile.summary.substring(0, 150)}
          <span className={classes.more} onClick={onView}>
            ...more
          </span>
        </>
      )}
    </GridItem>
  );

  const body = (
    <div className={viewModal ? classes.viewProfileBody : classes.profileBody}>
      <GridItem
        xs
        className={classes.profileitem}>{`Born on ${profile.bdate}`}</GridItem>
      <GridItem
        xs
        className={
          classes.profileitem
        }>{`${profile.jtitle} at ${profile.cname}`}</GridItem>
      {profile.picture && <img src={profile.picture} height={300} alt={''} />}
      {summary}
      <GridItem xs className={classes.profilelist}>
        {`Interested in ${profile.interests}`}
      </GridItem>
      <GridItem xs className={classes.profilelist}>
        {`Skilled in ${profile.skills}`}
      </GridItem>
    </div>
  );
  return viewModal !== true ? (
    <Card
      header={header}
      xs={12}
      sm={6}
      lg={4}
      className={classes.profile}
      footer={footer}>
      {body}
    </Card>
  ) : (
    <Card
      header={header}
      xs={12}
      md={8}
      footer={footer}
      className={classes.viewProfile}>
      {body}
    </Card>
  );
};

export default Profile;
