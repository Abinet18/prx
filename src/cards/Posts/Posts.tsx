import React from 'react';

import Post from './Post';
import CardContainer from '../CardContainer';
import { useStore } from '../../store/store';
import { cardStyles } from '../../styles/styles';
import PostFormModal from './PostFormModal';
import AddPost from './AddPost';

const Profiles = () => {
  const [ids] = useStore(['postids'], []);
  const classes = cardStyles();

  // const onRemovePost = (id: string) => {
  //   setIds(ids.filter((cid: string) => cid !== id));
  //   remove(['profiles', id]);
  // };

  return (
    <CardContainer
      xs={12}
      md={8}
      alignItems={'flex-start'}
      justify={'flex-start'}
      className={classes.container}>
      <AddPost />
      <PostFormModal />
      {ids.map((key: string, index: number) => (
        <Post key={key} id={key} />
      ))}
    </CardContainer>
  );
};

export default Profiles;
