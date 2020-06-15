import React from 'react';
import Card from '../Card';
import { useStore, setInternal } from '../../store/store';
import { cardStyles } from '../../styles/styles';
import GridItem from '../../Views/GridItem';
import EditIconButton from '../../IconButtons/EditIconButton';

type Props = {
  id: string;
  viewModal?: boolean;
};

const Post = ({ id, viewModal }: Props) => {
  const path = ['posts', id];
  const classes = cardStyles();
  const [post] = useStore(path, {});
  const [, setOpen] = useStore(['postopen'], false);

  const onEdit = () => {
    setOpen(true);
    setInternal(['curPostPath'], path);
  };

  const header = <div className={classes.headerNoBkg}>{post.title}</div>;
  const footer = (
    <div className={classes.footerNoBkg}>
      <EditIconButton label={'Edit'} onClick={onEdit} />
    </div>
  );

  const body = (
    <div className={classes.postBody}>
      <GridItem
        xs
        className={classes.postItem}>{`Posted on ${post.postedDate}`}</GridItem>
      <GridItem
        xs
        className={classes.postItem}>{`By ${post.postedBy} `}</GridItem>
      <GridItem xs className={classes.postText}>
        {post.text}
      </GridItem>

      {/* <GridItem xs className={classes.postImage}>
       <Image src={post.imageAttachement}>
      </GridItem> */}
    </div>
  );
  return (
    <Card header={header} xs={12} className={classes.post} footer={footer}>
      {body}
    </Card>
  );
};

export default Post;
