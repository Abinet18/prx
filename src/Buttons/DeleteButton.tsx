import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomButton from './CustomBotton';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const DeleteButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomButton
      className={buttonClasses.delete}
      disabled={disabled}
      icon={<DeleteIcon />}
      label={label}
      onClick={onClick}
    />
  );
};

export default DeleteButton;
