import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const CloseIconButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.close}
      disabled={disabled}
      icon={<CloseIcon fontSize={'small'} />}
      label={label}
      onClick={onClick}
    />
  );
};

export default CloseIconButton;
