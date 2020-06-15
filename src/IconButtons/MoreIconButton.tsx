import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

type Props = {
  label?: string;
  onClick?: (event?: any) => void;
  disabled?: boolean;
  fontSize?: 'small' | 'large';
};

const MoreIconButton = ({ label, onClick, disabled, fontSize }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.close}
      disabled={disabled}
      icon={<MoreVertIcon fontSize={fontSize || 'small'} />}
      label={label}
      onClick={onClick}
    />
  );
};

export default MoreIconButton;
