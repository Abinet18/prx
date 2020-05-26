import React, { useState } from 'react';

import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import Card from './Card';

import FormLine from './FormLine';
import { FormData, FormField, Option } from '../types/types';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import CheckBox from '../Inputs/CheckBox';
import CheckBoxes from '../Inputs/CheckBoxes';
import RadioInput from '../Inputs/RadioInput';
import SwitchInput from '../Inputs/Switch';
import DateInput from '../Inputs/DateInput';

type Props = {
  data: FormData;
};

const footer = <div>Footer</div>;
const Form = ({ data }: Props) => {
  const values = data.fields.map((field) => {
    return { name: field.name, value: field.default };
  });

  const [formValues, setFormValues] = useState(values);
  const _onChange = (index: number, value: string) => {
    formValues[index].value = value;
    setFormValues([...formValues]);
  };

  const getInput = (field: FormField, index: number) => {
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
            value={formValues[index].value ?? ''}
            placeholder={field.placeholder ?? ''}
            onChange={(value) => {
              _onChange(index, value);
            }}
          />
        );
      case 'SELECT':
        return (
          <SelectInput
            value={formValues[index].value ?? ''}
            onChange={(value) => {
              _onChange(index, value);
            }}
            options={selectOptions}
          />
        );
      case 'MULTISELECT':
        return (
          <MultiSelectInput
            selectedValsStr={formValues[index].value ?? ''}
            onChange={(value) => {
              _onChange(index, value);
            }}
            options={selectOptions}
          />
        );
      case 'CHECKBOX':
        return (
          <CheckBox
            checked={formValues[index].value === 'Y' ? 'Y' : 'N'}
            onChange={(value) => {
              _onChange(index, value);
            }}
            label={field.label}
          />
        );
      case 'CHECKBOXES':
        return (
          <CheckBoxes
            options={checkboxOptions}
            selectedValsStr={formValues[index].value ?? ''}
            onChange={(value) => {
              _onChange(index, value);
            }}
            row
          />
        );
      case 'RADIO':
        return (
          <RadioInput
            selectedValue={formValues[index].value ?? ''}
            options={radioOptions}
            onChange={(value) => {
              _onChange(index, value);
            }}
            row
          />
        );
      case 'SWITCH':
        return (
          <SwitchInput
            checked={formValues[index].value === 'Y' ? 'Y' : 'N'}
            onChange={(value) => {
              _onChange(index, value);
            }}
            label={field.label}
          />
        );
      case 'DATE':
        return (
          <DateInput
            selectedDate={formValues[index].value ?? ''}
            onChange={(value) => {
              _onChange(index, value);
            }}
            label={''}
          />
        );
    }
  };

  return (
    <Card title={data.title} xs={8} footer={footer}>
      {data.fields.map((field, index) => (
        <FormLine label={field.label} labelSize={3}>
          {getInput(field, index)}
        </FormLine>
      ))}
    </Card>
  );
};

export default Form;
