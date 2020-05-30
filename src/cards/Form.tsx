import React from 'react';

import Card from './Card';

import FormLine from './FormLine';
import { ProfileFormData } from '../types/types';

import { cardStyles } from '../styles/styles';
import InputField from './InputField';
import ProfileSaveButton from './ProfileSaveButton';

type Props = {
  data: ProfileFormData;
  onSubmit: () => void;
  path?: string[];
};

const Form = ({ data, onSubmit, path }: Props) => {
  const classes = cardStyles();
  const curPath = path || ['newProfile'];

  const header = <div className={classes.header}>{data.title}</div>;

  return (
    <Card header={header} xs={12} className={classes.root}>
      {data.fields.map((field, index) => (
        <FormLine key={index} label={field.label} labelSize={3}>
          <InputField
            field={field}
            path={curPath}
            // onValidityChange={setValid}
          />
        </FormLine>
      ))}
      <ProfileSaveButton
        path={curPath}
        count={data.fields.length}
        onSubmit={onSubmit}
      />
    </Card>
  );
};

export default Form;
