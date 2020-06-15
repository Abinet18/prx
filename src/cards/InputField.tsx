import React from 'react';

import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import { Option, ProfileFormField, PostFormField } from '../types/types';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import CheckBox from '../Inputs/CheckBox';
import CheckBoxes from '../Inputs/CheckBoxes';
import RadioInput from '../Inputs/RadioInput';
import SwitchInput from '../Inputs/Switch';
import DateInput from '../Inputs/DateInput';

import { useStore, get, setInternal } from '../store/store';

type Props = {
  field: ProfileFormField | PostFormField;
  path: string[];
};

const InputField = ({ field, path }: Props) => {
  const [value, setValue] = useStore([...path, field.name], '');
  const options = field.options ?? [];
  const selectOptions = field.type.toUpperCase().includes('SELECT')
    ? (options as Option[])
    : [];
  const checkboxOptions = field.type.toUpperCase().includes('CHECKBOX')
    ? (options as Option[])
    : [];
  const radioOptions =
    field.type.toUpperCase() === 'RADIO' ? (options as string[]) : [];

  const onChange = (newValue: string) => {
    const validityPath = [...path, 'valid'];
    const valid = get(validityPath);
    if (value.trim().length === 0 && newValue.trim().length > 0) {
      setInternal(validityPath, valid + 1);
    } else if (value.trim().length > 0 && newValue.trim().length === 0) {
      setInternal(validityPath, valid + 1);
    }
    setValue(newValue);
  };
  switch (field.type.toUpperCase()) {
    case 'TEXT':
      return (
        <TextInput
          value={value}
          placeholder={field.placeholder ?? ''}
          onChange={onChange}
          rows={field.rows}
        />
      );
    case 'SELECT':
      return (
        <SelectInput
          value={value}
          onChange={onChange}
          options={selectOptions}
        />
      );
    case 'MULTISELECT':
      return (
        <MultiSelectInput
          selectedValsStr={value}
          onChange={onChange}
          options={selectOptions}
        />
      );
    case 'CHECKBOX':
      return (
        <CheckBox
          checked={value === 'Y' ? 'Y' : 'N'}
          onChange={onChange}
          label={field.label}
        />
      );
    case 'CHECKBOXES':
      return (
        <CheckBoxes
          options={checkboxOptions}
          selectedValsStr={value}
          onChange={onChange}
          row
        />
      );
    case 'RADIO':
      return (
        <RadioInput
          selectedValue={value}
          options={radioOptions}
          onChange={onChange}
          row
        />
      );
    case 'SWITCH':
      return (
        <SwitchInput
          checked={value === 'Y' ? 'Y' : 'N'}
          onChange={onChange}
          label={field.label}
        />
      );
    case 'DATE':
      return <DateInput selectedDate={value} onChange={onChange} label={''} />;
    default:
      return (
        <TextInput
          value={value}
          placeholder={field.placeholder ?? ''}
          onChange={onChange}
        />
      );
  }
};

export default InputField;
