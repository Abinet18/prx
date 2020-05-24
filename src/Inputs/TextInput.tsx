import React from 'react';
import { Input, InputLabel } from '@material-ui/core';
import { inputLabelStyles, textInputStyles } from '../styles/styles';

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const TextInput = ({ label, value, onChange }: Props) => {
  const labelClasses = inputLabelStyles();
  const textInputClasses = textInputStyles();
  return (
    <>
      <InputLabel classes={labelClasses}>{label}</InputLabel>
      <Input
        classes={textInputClasses}
        value={value}
        onChange={(e) => onChange(e.target.value ?? '')}
      />
    </>
  );
};

export default TextInput;
