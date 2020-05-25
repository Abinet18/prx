import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { Option } from '../types/types';
import { selectInputStyles } from '../styles/styles';
import CustomTextField from './CustomTextField';

type Props = {
  label?: string;
  value: string;
  options: Option[];
  disableClearable?: boolean;
  onChange: (value: Option | null) => void;
  placeholder?: string;
};

const SelectInput = ({
  label,
  value,
  onChange,
  options,
  disableClearable,
  placeholder,
}: Props) => {
  const classes = selectInputStyles();
  return (
    <Autocomplete
      disableClearable={disableClearable}
      options={options}
      getOptionLabel={(option: Option) => option.label}
      onChange={(event, value) => onChange(value)}
      className={classes.root}
      renderInput={(params) => (
        <CustomTextField
          params={params}
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default SelectInput;
