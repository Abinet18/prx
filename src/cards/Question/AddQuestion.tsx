import React from 'react';

import AddButton from '../../Buttons/AddButton';
import { useStore, setInternal, get } from '../../store/store';
import { emptyQuestion } from '../../data/data';

const AddQuestion = () => {
  const [qindex, setQindex] = useStore(['qindex'], 0);
  const onAddQuestion = () => {
    const cid = 'question' + qindex;
    const qids = get(['qids']) ?? [];
    setInternal(['questions', cid], { ...emptyQuestion });
    setInternal(['qids'], [...qids, cid]);
    setInternal(['curQpath'], ['questions', cid]);
    setQindex(qindex + 1);
  };
  return <AddButton onClick={onAddQuestion} />;
};

export default AddQuestion;
