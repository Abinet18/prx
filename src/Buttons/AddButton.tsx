import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomButton from './CustomBotton';
import AddIcon from '@material-ui/icons/Add';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const AddButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomButton
      className={buttonClasses.primary}
      disabled={disabled}
      icon={<AddIcon />}
      label={label}
      onClick={onClick}
    />
  );
};

export default AddButton;
