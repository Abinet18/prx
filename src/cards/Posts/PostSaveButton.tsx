import React from 'react';
import SubmitButton from '../../Buttons/SubmitButton';
import { cardStyles } from '../../styles/styles';
import { useStore, get, setInternal, add, clear } from '../../store/store';

type Props = {
  path: string[];
  count: number;
};

const PostSaveButton = ({ path, count }: Props) => {
  const [valid] = useStore([...path, 'valid'], 0);
  const classes = cardStyles();
  const onSubmit = () => {
    if (path[0] === 'newPost') {
      const index = get(['postindex']);
      const curId = 'post' + index;
      const ids = get(['postids']) ?? [];
      setInternal(['newPost', 'postedDate'], new Date());
      add(['posts', curId], ['newPost']);
      setInternal(['postindex'], index + 1);
      setInternal(['postids'], [...ids, curId]);
      clear(['newPost']);
    } else {
      const post = get(path);
      setInternal(path, post);
    }
    setInternal(['postopen'], false);
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

export default PostSaveButton;
