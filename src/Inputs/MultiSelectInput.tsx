import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { Option } from '../types/types';
import { selectInputStyles } from '../styles/styles';
import CustomTextField from './CustomTextField';

type Props = {
  label?: string;
  selectedValsStr: string;
  options: Option[];
  disableClearable?: boolean;
  onChange: (value: string) => void;
};

const MultiSelectInput = ({
  label,
  selectedValsStr,
  onChange,
  options,
  disableClearable,
}: Props) => {
  const classes = selectInputStyles();
  const selectedValues = selectedValsStr.split(',');
  const selectedOptions = options.filter((option) =>
    selectedValues.includes(option.value),
  );
  const _onChange = (values: Option[]) => {
    onChange(values.map((option) => option.value).join(','));
  };
  return (
    <Autocomplete
      disableClearable={disableClearable}
      multiple
      value={selectedOptions}
      options={options}
      getOptionLabel={(option: Option) => option.label}
      onChange={(event, values) => {
        _onChange(values);
      }}
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
