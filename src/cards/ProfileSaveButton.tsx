import React from 'react';
import SubmitButton from '../Buttons/SubmitButton';
import { cardStyles } from '../styles/styles';
import { useStore } from '../store/store';

type Props = {
  path: string[];
  count: number;
  onSubmit: () => void;
};

const ProfileSaveButton = ({ path, count, onSubmit }: Props) => {
  const [valid] = useStore([...path, 'valid'], 0);
  const classes = cardStyles();
  return (
    <div className={classes.footerNoBkg}>
      <SubmitButton
        label='Submit'
        onClick={onSubmit}
        disabled={valid < count}
      />
    </div>
  );
};

export default ProfileSaveButton;
