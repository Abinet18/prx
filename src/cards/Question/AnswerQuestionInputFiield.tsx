import React, { useEffect } from 'react';

import TextInput from '../../Inputs/TextInput';

import CheckBoxes from '../../Inputs/CheckBoxes';
import RadioInput from '../../Inputs/RadioInput';

import { useStore, get } from '../../store/store';

import FormLine from '../FormLine';
import { MatchDND } from '../../Views/DraggableList';
import MultiSelectInput from '../../Inputs/MultiSelectInput';

type Props = {
  path: string[];
};

const AnswerQuestionInputField = ({ path }: Props) => {
  const [q, setQ] = useStore(path, {});
  const [a, setA] = useStore(['answers', path[path.length - 1]], '');

  useEffect(() => {
    if (q.question !== get(path)) {
      setQ(get(path));
      setA(get(['answers', path[path.length - 1]]));
    }
  }, [path, q.question, setA, setQ]);
  const options = q.options ?? [];
  const checkboxOptions = options.map((option: string) => {
    return { value: option, label: option };
  });

  const onChange = (newValue: string) => {
    // const validityPath = [...path, 'valid'];
    // const valid = get(validityPath);
    // if (value?.trim().length === 0 && newValue.trim().length > 0) {
    //   setInternal(validityPath, valid + 1);
    // } else if (value?.trim().length > 0 && newValue.trim().length === 0) {
    //   setInternal(validityPath, valid + 1);
    // }
    setA(newValue);
  };

  const getInput = () => {
    switch (q.type.toUpperCase()) {
      // case 'TEXT':
      //   return (
      //     <TextInput
      //       value={a}
      //       placeholder={'Write you answer here ....'}
      //       onChange={onChange}
      //     />
      //   );
      case 'SELECT':
        return (
          <RadioInput
            selectedValue={a}
            options={options}
            onChange={onChange}
            row
          />
        );
      case 'MULTISELECT':
        return (
          // <CheckBoxes
          //   options={checkboxOptions}
          //   selectedValsStr={a}
          //   onChange={onChange}
          //   row
          // />
          <MultiSelectInput
            options={checkboxOptions}
            selectedValsStr={a}
            onChange={onChange}
            // row
          />
        );
      case 'TRUE FALSE':
        return (
          <RadioInput
            selectedValue={a}
            options={['True', 'False']}
            onChange={onChange}
            row
          />
        );
      case 'MATCH':
        return (
          <MatchDND
            matches={a || JSON.stringify(q.matchGroups)}
            onChange={onChange}
          />
        );
      default:
        return (
          <TextInput
            value={a}
            placeholder={'Write you answer here ....'}
            onChange={onChange}
          />
        );
    }
  };

  return (
    <FormLine label={q.text} labelSize={12}>
      {getInput()}
    </FormLine>
  );
};

export default AnswerQuestionInputField;
