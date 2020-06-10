import React from 'react';
import SubmitButton from '../Buttons/SubmitButton';
import { cardStyles } from '../styles/styles';
import { useStore, get, setInternal, add, clear } from '../store/store';

type Props = {
  path: string[];
  count: number;
};

const ProfileSaveButton = ({ path, count }: Props) => {
  const [valid] = useStore([...path, 'valid'], 0);
  const classes = cardStyles();
  const onSubmit = () => {
    if (path[0] === 'newProfile') {
      const index = get(['index']);
      const curId = 'profile' + index;
      const ids = get(['ids']) ?? [];
      add(['profiles', curId], ['newProfile']);
      setInternal(['index'], index + 1);
      setInternal(['ids'], [...ids, curId]);
      clear(['newProfile']);
    } else {
      const profile = get(path);
      setInternal(path, profile);
    }
    setInternal(['open'], false);
  };
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
