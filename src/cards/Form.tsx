import React from 'react';

import Card from './Card';

import FormLine from './FormLine';
import { ProfileFormData } from '../types/types';

import SubmitButton from '../Buttons/SubmitButton';
import { cardStyles } from '../styles/styles';
import InputField from './InputField';

type Props = {
  data: ProfileFormData;
  onSubmit: () => void;
  path?: string[];
};

const Form = ({ data, onSubmit, path }: Props) => {
  const classes = cardStyles();
  const curPath = path || ['newProfile'];

  const header = <div className={classes.header}>{data.title}</div>;
  const footer = (
    <div className={classes.footerNoBkg}>
      <SubmitButton label='Submit' onClick={onSubmit} />
    </div>
  );

  return (
    <Card header={header} xs={12} footer={footer} className={classes.root}>
      {data.fields.map((field, index) => (
        <FormLine key={index} label={field.label} labelSize={3}>
          <InputField field={field} path={curPath} />
        </FormLine>
      ))}
    </Card>
  );
};

export default Form;
