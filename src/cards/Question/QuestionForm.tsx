import React from 'react';

import Card from '../Card';

import FormLine from '../FormLine';
import { questionForm as data } from '../../data/data';

import { cardStyles } from '../../styles/styles';

import QuestionInputField from './QuestionInputField';
import AnswerOptions from './AnswerOptions';
import { useStore } from '../../store/store';
import MatchGroupOptions from './MatchGroupOptions';

type Props = {
  path: string[];
};
const QuestionForm = ({ path }: Props) => {
  const classes = cardStyles();
  const [qids] = useStore(['qids'], []);

  if (path.length === 0) {
    return null;
  }

  const index = qids.indexOf(path[path.length - 1]);

  const header = (
    <div className={classes.headerBlue}>{`Question ${index + 1}`}</div>
  );

  return (
    <Card header={header} xs={8} className={classes.qn}>
      {data.fields.map((field, index) => (
        <FormLine key={index} label={field.label} labelSize={12}>
          <QuestionInputField field={field} path={path} />
        </FormLine>
      ))}
      <AnswerOptions path={path} />
      <MatchGroupOptions path={path} />
    </Card>
  );
};

export default QuestionForm;
