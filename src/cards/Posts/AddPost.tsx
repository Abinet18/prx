import React from 'react';
import Card from '../Card';
import { cardStyles } from '../../styles/styles';
import GridItem from '../../Views/GridItem';
import AddButton from '../../Buttons/AddButton';
import { useStore } from '../../store/store';

const AddPost = () => {
  const classes = cardStyles();
  const [, setOpen] = useStore(['postopen'], false);
  const [, setCurPath] = useStore(['curPostPath'], ['newPost']);

  const onClick = () => {
    setOpen(true);
    setCurPath(['newPost']);
  };

  const header = <div className={classes.headerNoBkg}>Add Post</div>;
  const footer = <div className={classes.footerNoBkg}></div>;
  return (
    <Card header={header} xs={12} className={classes.post} footer={footer}>
      <GridItem xs className={classes.postBody}>
        <AddButton onClick={onClick} label={'Add Post'} />
      </GridItem>
    </Card>
  );
};

export default AddPost;
