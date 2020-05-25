import React from 'react';

import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import Card from './Card';

import FormLine from './FormLine';
import { FormData, FormField, Option, CheckboxValue } from '../types/types';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import CheckBox from '../Inputs/CheckBox';
import CheckBoxes from '../Inputs/CheckBoxes';
import RadioInput from '../Inputs/RadioInput';
import SwitchInput from '../Inputs/Switch';

type Props = {
  data: FormData;
};

const footer = <div>Footer</div>;
const Form = ({ data }: Props) => {
  return (
    <Card title={data.title} xs={8} footer={footer}>
      {data.fields.map((field) => (
        <FormLine label={field.label} labelSize={3}>
          {getInput(field)}
        </FormLine>
      ))}
    </Card>
  );
};

const getInput = (field: FormField) => {
  const options = field.options ?? [];
  const selectOptions = field.type.toUpperCase().includes('SELECT')
    ? (options as Option[])
    : [];
  const checkboxOptions = field.type.toUpperCase().includes('CHECKBOX')
    ? (options as CheckboxValue[])
    : [];
  const radioOptions =
    field.type.toUpperCase() === 'RADIO' ? (options as string[]) : [];
  switch (field.type.toUpperCase()) {
    case 'TEXT':
      return (
        <TextInput
          value={field.default ?? ''}
          placeholder={field.placeholder ?? ''}
          onChange={() => {}}
        />
      );
    case 'SELECT':
      return (
        <SelectInput
          value={''}
          onChange={(val) => {}}
          options={selectOptions}
        />
      );
    case 'MULTISELECT':
      return (
        <MultiSelectInput
          values={[]}
          onChange={() => {}}
          options={selectOptions}
        />
      );
    case 'CHECKBOX':
      return (
        <CheckBox checked={false} onChange={() => {}} label={field.label} />
      );
    case 'CHECKBOXES':
      return <CheckBoxes values={checkboxOptions} onChange={() => {}} row />;
    case 'RADIO':
      return (
        <RadioInput
          selectedValue=''
          options={radioOptions}
          onChange={() => {}}
          row
        />
      );
    case 'SWITCH':
      return (
        <SwitchInput checked={false} onChange={() => {}} label={field.label} />
      );
  }
};

export default Form;
