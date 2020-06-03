import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomButton from './CustomBotton';
import DeleteIcon from '@material-ui/icons/Edit';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const EditButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomButton
      className={buttonClasses.edit}
      disabled={disabled}
      icon={<DeleteIcon />}
      label={label}
      onClick={onClick}
    />
  );
};

export default EditButton;
