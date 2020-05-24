import React from 'react';

import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import Card from './Card';

import FormLine from './FormLine';
import { Option } from '../types/types';
import MultiSelectInput from '../Inputs/MultiSelectInput';

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const optionValues = ['Option1', 'Option2', 'Option3', 'Option4'];
const options: Option[] = optionValues.map((option) => {
  return { value: option, label: option };
});

const footer = <div>Footer</div>;
const Form = () => {
  return (
    <Card title={'Form'} xs={8} footer={footer}>
      <FormLine label={'Name'}>
        <TextInput value={'test'} onChange={(val) => {}} />
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
    </Card>
  );
};

export default Form;
