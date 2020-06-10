import React, { useEffect } from 'react';

import { useStore, get } from '../../store/store';

import { cardStyles } from '../../styles/styles';

import GridContainer from '../../Views/GridContainer';
import TextInput from '../../Inputs/TextInput';
import AddIconButton from '../../IconButtons/AddIconButton';
import GridItem from '../../Views/GridItem';
import CloseIconButton from '../../IconButtons/CloseIconButton';

type Props = {
  path: string[];
};
const AnswerOptions = ({ path }: Props) => {
  const [options, setOptions] = useStore([...path, 'options'], ['']);
  const [type, setType] = useStore([...path, 'type'], 'TEXT');
  const classes = cardStyles();
  useEffect(() => {
    if (
      type !== get([...path, 'type']) ||
      (options ?? []).join('.') !== (get([...path, 'options']) ?? []).join('.')
    ) {
      setType(get([...path, 'type']));
      let noptions = get([...path, 'type']);
      if (!noptions) {
        noptions = [];
      }
      setOptions(get([...path, 'options']));
    }
  }, [options, path, setOptions, setType, type]);
  if (type?.toUpperCase().indexOf('SELECT') === -1) {
    return null;
  }

  const onRemoveOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };
  const onAddOption = () => {
    setOptions([...(options ?? []), '']);
  };
  const onUpdateOption = (index: number, option: string) => {
    options[index] = option;
    setOptions([...options]);
  };

  return (
    <GridContainer xs className={classes.options}>
      {options?.map((option: string, index: number) => (
        <GridContainer xs={12} className={classes.option}>
          <GridItem xs={11}>
            <TextInput
              value={option}
              onChange={(value: string) => onUpdateOption(index, value)}
              placeholder={'Write option'}
            />
          </GridItem>
          <GridItem xs={1}>
            <CloseIconButton onClick={() => onRemoveOption(index)} />
          </GridItem>
        </GridContainer>
      ))}
      <AddIconButton onClick={onAddOption} />
    </GridContainer>
  );
};

export default AnswerOptions;
