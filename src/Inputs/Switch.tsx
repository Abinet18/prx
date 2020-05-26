import React, { ChangeEvent } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { checkboxStyles } from '../styles/styles';

type Props = {
  checked?: 'Y' | 'N';
  onChange: (checked: 'Y' | 'N') => void;
  label: string;
};

const SwitchInput = ({ checked, onChange, label }: Props) => {
  const classes = checkboxStyles();
  const _onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? 'Y' : 'N');
  };
  return (
    <FormControlLabel
      classes={classes}
      control={<Switch checked={checked === 'Y'} onChange={_onChange} />}
      label={label}
    />
  );
};

export default SwitchInput;
