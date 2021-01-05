import React, { useEffect } from 'react';

import { useStore, get } from '../../store/store';

import { cardStyles } from '../../styles/styles';

import GridContainer from '../../Views/GridContainer';
import TextInput from '../../Inputs/TextInput';
import AddIconButton from '../../IconButtons/AddIconButton';
import GridItem from '../../Views/GridItem';
import CloseIconButton from '../../IconButtons/CloseIconButton';
import { MatchGroups } from '../../types/types';

const stringify = (matchGroups?: MatchGroups) => {
  return JSON.stringify(matchGroups ?? {});
};
type Props = {
  path: string[];
};
const MatchGroupOptions = ({ path }: Props) => {
  const [matchGroups, setMatchGroups] = useStore([...path, 'matchGroups'], {
    unmatched: { tilte: 'Choose from these', list: [] },
  });
  const [type, setType] = useStore([...path, 'type'], 'TEXT');
  const classes = cardStyles();
  useEffect(() => {
    if (
      type !== get([...path, 'type']) ||
      stringify(matchGroups) !== stringify(get([...path, 'matchGroups']))
    ) {
      setType(get([...path, 'type']));
      setMatchGroups(get([...path, 'matchGroups']));
    }
  }, [matchGroups, path, setMatchGroups, setType, type]);
  if (type?.toUpperCase().indexOf('MATCH') === -1) {
    return null;
  }

  const onRemoveOption = (index: number) => {
    const newOptions = [...matchGroups['unmatched'].list];
    newOptions.splice(index, 1);
    setMatchGroups({
      ...matchGroups,
      unmatched: { ...matchGroups.unmatched, list: newOptions },
    });
  };
  const onAddOption = () => {
    setMatchGroups({
      ...matchGroups,
      unmatched: {
        ...matchGroups?.unmatched,
        list: [...(matchGroups?.unmatched?.list ?? []), ''],
      },
    });
  };
  const onUpdateOption = (index: number, option: string) => {
    matchGroups.unmatched.list[index] = option;
    setMatchGroups({
      ...matchGroups,
      unmatched: {
        ...matchGroups.unmatched,
        list: [...matchGroups.unmatched.list],
      },
    });
  };

  const onUpdateTitle = (key: string, title: string) => {
    setMatchGroups({
      ...matchGroups,
      [key]: {
        ...matchGroups[key],
        title,
      },
    });
  };

  const onAddGroup = () => {
    const pref = 'match';
    const getIndex = (matchStr: string): number => {
      return parseInt(matchStr.substring(pref.length));
    };
    const keys = Object.keys(matchGroups)
      .filter((key) => key !== 'unmatched')
      .sort((a, b) => getIndex(a) - getIndex(b));
    const nextKey =
      keys.length > 0
        ? `${pref}${getIndex(keys[keys.length - 1]) + 1}`
        : 'match1';

    setMatchGroups({
      ...matchGroups,
      [nextKey]: {
        title: '',
        list: [],
      },
    });
  };

  const onRemoveGroup = (key: string) => {
    matchGroups[key] = undefined;

    delete matchGroups[key];
    console.log(matchGroups);
    setMatchGroups({ ...matchGroups });
  };

  return (
    <GridContainer xs className={classes.options}>
      <GridItem xs={6}>
        {matchGroups?.unmatched?.list?.map((option: string, index: number) => (
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
      </GridItem>
      <GridItem xs={6}>
        {matchGroups &&
          Object.keys(matchGroups)
            .filter((key) => key !== 'unmatched')
            .map((key) => (
              <GridContainer xs={12} className={classes.option}>
                <GridItem xs={11}>
                  <TextInput
                    value={matchGroups[key]?.title}
                    onChange={(value: string) => onUpdateTitle(key, value)}
                    placeholder={'Write match target'}
                  />
                </GridItem>
                <GridItem xs={1}>
                  <CloseIconButton onClick={() => onRemoveGroup(key)} />
                </GridItem>
              </GridContainer>
            ))}
        <AddIconButton onClick={onAddGroup} />
      </GridItem>
    </GridContainer>
  );
};

export default MatchGroupOptions;
