import React from 'react';

import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import Card from './Card';

import FormLine from './FormLine';
import { Option, CheckboxValue } from '../types/types';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import CheckBox from '../Inputs/CheckBox';
import CheckBoxes from '../Inputs/CheckBoxes';
import RadioInput from '../Inputs/RadioInput';

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const optionValues = ['Option1', 'Option2', 'Option3', 'Option4'];
const options: Option[] = optionValues.map((option) => {
  return { value: option, label: option };
});

const values: CheckboxValue[] = optionValues.map((option) => {
  return { value: option, checked: false };
});

const footer = <div>Footer</div>;
const Form = () => {
  return (
    <Card title={'Form'} xs={8} footer={footer}>
      <FormLine label={'Name'}>
        <TextInput value={'test'} onChange={(val) => {}} rows={2} />
      </FormLine>
      <FormLine label={'Status'}>
        <SelectInput value={''} onChange={(val) => {}} options={options} />
      </FormLine>
      <FormLine label={'Hobbies'}>
        <MultiSelectInput
          values={[]}
          onChange={(val) => {}}
          options={options}
        />
      </FormLine>
      <FormLine label={'Interested ?'}>
        <CheckBox checked={false} onChange={() => {}} label='Interested' />
      </FormLine>
      <FormLine label={'Interests'}>
        <CheckBoxes values={values} onChange={() => {}} />
      </FormLine>
      <FormLine label={'Interests'}>
        <RadioInput
          selectedValue=''
          options={optionValues}
          onChange={() => {}}
        />
      </FormLine>
    </Card>
  );
};

export default Form;
