import React from 'react';

import { cardStyles } from '../../styles/styles';
import GridItem from '../../Views/GridItem';
import GridContainer from '../../Views/GridContainer';
import { useStore } from '../../store/store';
import CloseIconButton from '../../IconButtons/CloseIconButton';
import cx from 'classnames';

type Props = {
  qid: string;
  onRemoveQuestion: (val: string) => void;
};
const QBrief = ({ qid, onRemoveQuestion }: Props) => {
  const classes = cardStyles();
  const [curQpath, setCurQpath] = useStore(['curQpath'], []);

  const onSelectQ = () => {
    setCurQpath(['questions', qid]);
  };
  return (
    <div
      className={cx(
        classes.qbrief,
        curQpath[curQpath.length - 1] === qid ? classes.qactive : null,
      )}>
      <GridContainer xs justify={'space-between'} onClick={onSelectQ}>
        <GridItem xs>{qid}</GridItem>
        <CloseIconButton onClick={() => onRemoveQuestion(qid)} />
      </GridContainer>
    </div>
  );
};

export default QBrief;
