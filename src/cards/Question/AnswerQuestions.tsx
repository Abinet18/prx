import React from 'react';

import CardContainer from '../CardContainer';
import { useStore, remove } from '../../store/store';

import { cardStyles } from '../../styles/styles';

import Card from '../Card';
import AQBrief from './AQBrief';
import AnswerQuestion from './AnswerQuestion';

const AnswerQuestions = () => {
  const [qids] = useStore(['qids'], []);
  const classes = cardStyles();
  const [curAQpath] = useStore(['curAQpath'], []);

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
          <AQBrief key={key} qid={key} />
        ))}
      </Card>
      <AnswerQuestion path={curAQpath} />
    </CardContainer>
  );
};

export default AnswerQuestions;
