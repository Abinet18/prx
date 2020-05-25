import React from 'react';
import { Input, InputLabel } from '@material-ui/core';
import { inputLabelStyles, textFieldRootStyles } from '../styles/styles';

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
};

const TextInput = ({ label, value, onChange, rows }: Props) => {
  const labelClasses = inputLabelStyles();
  const textInputClasses = textFieldRootStyles();
  return (
    <>
      <InputLabel classes={labelClasses}>{label}</InputLabel>
      <Input
        rows={rows}
        classes={textInputClasses}
        value={value}
        onChange={(e) => onChange(e.target.value ?? '')}
      />
    </>
  );
};

export default TextInput;
