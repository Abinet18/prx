import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { checkboxStyles } from '../styles/styles';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
};

const SwitchInput = ({ checked, onChange, label }: Props) => {
  const classes = checkboxStyles();
  return (
    <FormControlLabel
      classes={classes}
      control={
        <Switch
          checked={checked}
          onChange={(event) => {
            onChange(event.target.checked);
          }}
        />
      }
      label={label}
    />
  );
};

export default SwitchInput;
