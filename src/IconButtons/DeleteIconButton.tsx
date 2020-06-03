import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const DeleteIconButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.delete}
      disabled={disabled}
      icon={<DeleteIcon />}
      label={label}
      onClick={onClick}
    />
  );
};

export default DeleteIconButton;
