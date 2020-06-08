import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';
import AddIcon from '@material-ui/icons/Add';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const AddIconButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.close}
      disabled={disabled}
      icon={<AddIcon fontSize={'small'} />}
      label={label}
      onClick={onClick}
    />
  );
};

export default AddIconButton;
