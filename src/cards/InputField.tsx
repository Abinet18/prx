import React from 'react';

import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import { Option, ProfileFormField } from '../types/types';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import CheckBox from '../Inputs/CheckBox';
import CheckBoxes from '../Inputs/CheckBoxes';
import RadioInput from '../Inputs/RadioInput';
import SwitchInput from '../Inputs/Switch';
import DateInput from '../Inputs/DateInput';

import { useStore } from '../store/store';

type Props = {
  field: ProfileFormField;
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
  switch (field.type.toUpperCase()) {
    case 'TEXT':
      return (
        <TextInput
          value={value}
          placeholder={field.placeholder ?? ''}
          onChange={(value) => {
            setValue(value);
          }}
        />
      );
    case 'SELECT':
      return (
        <SelectInput
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
          options={selectOptions}
        />
      );
    case 'MULTISELECT':
      return (
        <MultiSelectInput
          selectedValsStr={value}
          onChange={(value) => {
            setValue(value);
          }}
          options={selectOptions}
        />
      );
    case 'CHECKBOX':
      return (
        <CheckBox
          checked={value === 'Y' ? 'Y' : 'N'}
          onChange={(value) => {
            setValue(value);
          }}
          label={field.label}
        />
      );
    case 'CHECKBOXES':
      return (
        <CheckBoxes
          options={checkboxOptions}
          selectedValsStr={value}
          onChange={(value) => {
            setValue(value);
          }}
          row
        />
      );
    case 'RADIO':
      return (
        <RadioInput
          selectedValue={value}
          options={radioOptions}
          onChange={(value) => {
            setValue(value);
          }}
          row
        />
      );
    case 'SWITCH':
      return (
        <SwitchInput
          checked={value === 'Y' ? 'Y' : 'N'}
          onChange={(value) => {
            setValue(value);
          }}
          label={field.label}
        />
      );
    case 'DATE':
      return (
        <DateInput
          selectedDate={value}
          onChange={(value) => {
            setValue(value);
          }}
          label={''}
        />
      );
    default:
      return (
        <TextInput
          value={value}
          placeholder={field.placeholder ?? ''}
          onChange={(value) => {
            setValue(value);
          }}
        />
      );
  }
};

export default InputField;
