import React from 'react';

import { cardStyles } from '../../styles/styles';
import GridItem from '../../Views/GridItem';
import GridContainer from '../../Views/GridContainer';
import { useStore } from '../../store/store';
import cx from 'classnames';

type Props = {
  qid: string;
};
const AQBrief = ({ qid }: Props) => {
  const classes = cardStyles();
  const [curAQpath, setCurAQpath] = useStore(['curAQpath'], []);

  const onSelectQ = () => {
    setCurAQpath(['questions', qid]);
  };
  return (
    <div
      className={cx(
        classes.qbrief,
        curAQpath[curAQpath.length - 1] === qid ? classes.qactive : null,
      )}>
      <GridContainer xs justify={'space-between'} onClick={onSelectQ}>
        <GridItem xs>{qid}</GridItem>
      </GridContainer>
    </div>
  );
};

export default AQBrief;
