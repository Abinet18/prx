import React from 'react';

import Card from '../Card';

import { questionForm as data } from '../../data/data';

import { cardStyles } from '../../styles/styles';
import AnswerQuestionInputField from './AnswerQuestionInputFiield';
import { useStore } from '../../store/store';

type Props = {
  path: string[];
};
const AnswerQuestion = ({ path }: Props) => {
  const classes = cardStyles();
  const [qids] = useStore(['qids'], []);
  const index = qids.indexOf(path[path.length - 1]);

  if (path.length === 0) {
    return null;
  }

  const header = (
    <div className={classes.headerBlue}>{`Question ${index + 1}`}</div>
  );

  return (
    <Card header={header} xs={8} className={classes.qn}>
      <AnswerQuestionInputField path={path} />
    </Card>
  );
};

export default AnswerQuestion;
