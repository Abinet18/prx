import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { Option } from '../types/types';
import { selectInputStyles } from '../styles/styles';
import CustomTextField from './CustomTextField';

type Props = {
  label?: string;
  values: Option[];
  options: Option[];
  disableClearable?: boolean;
  onChange: (values: Option[] | null) => void;
};

const MultiSelectInput = ({
  label,
  values,
  onChange,
  options,
  disableClearable,
}: Props) => {
  const classes = selectInputStyles();
  return (
    <Autocomplete
      disableClearable={disableClearable}
      multiple
      options={options}
      getOptionLabel={(option: Option) => option.label}
      onChange={(event, values) => onChange(values)}
      className={classes.root}
      renderInput={(params) => (
        <CustomTextField
          params={params}
          label={label}
          placeholder={'Select ..'}
        />
      )}
      filterSelectedOptions={true}
    />
  );
};

export default MultiSelectInput;
