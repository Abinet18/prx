import React from 'react';

import Card from '../Card';

import FormLine from '../FormLine';
import { questionForm as data } from '../../data/data';

import { cardStyles } from '../../styles/styles';

import QuestionInputField from './QuestionInputField';
import AnswerOptions from './AnswerOptions';

type Props = {
  path: string[];
};
const QuestionForm = ({ path }: Props) => {
  const classes = cardStyles();

  if (path.length === 0) {
    return null;
  }

  const header = <div className={classes.headerBlue}>{data.title}</div>;

  return (
    <Card header={header} xs={8} className={classes.qn}>
      {data.fields.map((field, index) => (
        <FormLine key={index} label={field.label} labelSize={12}>
          <QuestionInputField field={field} path={path} />
        </FormLine>
      ))}
      <AnswerOptions path={path} />
    </Card>
  );
};

export default QuestionForm;
