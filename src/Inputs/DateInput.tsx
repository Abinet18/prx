import 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';
import { dateStyles } from '../styles/styles';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  label: string;
};

const DateInput = ({ selectedDate, onChange, label }: Props) => {
  const classes = dateStyles();
  return (
    <DatePicker
      dateFormat='yyyy/MM/dd'
      selected={selectedDate}
      onChange={(date: Date) => onChange(date)}
      className={classes.datePicker}
      wrapperClassName={classes.wrapper}
    />
  );
};

export default DateInput;
