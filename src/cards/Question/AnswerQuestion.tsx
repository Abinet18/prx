import React from 'react';

import Card from '../Card';

import { questionForm as data } from '../../data/data';

import { cardStyles } from '../../styles/styles';
import AnswerQuestionInputField from './AnswerQuestionInputFiield';

type Props = {
  path: string[];
};
const AnswerQuestion = ({ path }: Props) => {
  const classes = cardStyles();

  if (path.length === 0) {
    return null;
  }

  const header = <div className={classes.headerBlue}>{data.title}</div>;

  return (
    <Card header={header} xs={8} className={classes.qn}>
      <AnswerQuestionInputField path={path} />
    </Card>
  );
};

export default AnswerQuestion;
