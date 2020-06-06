import React from 'react';

import CardContainer from '../CardContainer';
import { useStore, remove } from '../../store/store';

import { cardStyles } from '../../styles/styles';
import QBrief from './QBrief';
import AddQuestion from './AddQuestion';
import QuestionForm from './QuestionForm';
import Card from '../Card';

const Questions = () => {
  const [qids, setQids] = useStore(['qids'], []);
  const classes = cardStyles();
  const [curQpath] = useStore(['curQpath'], []);

  const onRemoveQuestion = (id: string) => {
    setQids(qids.filter((cid: string) => cid !== id));
    remove(['questions', id]);
  };
  const header = <div className={classes.headerBlue}>Questions</div>;
  return (
    <CardContainer
      xs={12}
      md={8}
      alignItems={'flex-start'}
      justify={'flex-start'}
      className={classes.container}>
      <Card xs={4} header={header} className={classes.qn}>
        {qids.map((key: string) => (
          <QBrief key={key} qid={key} onRemoveQuestion={onRemoveQuestion} />
        ))}
        <AddQuestion />
      </Card>
      <QuestionForm path={curQpath} />
    </CardContainer>
  );
};

export default Questions;
