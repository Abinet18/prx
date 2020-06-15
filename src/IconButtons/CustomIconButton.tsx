import React from 'react';
import { IconButton } from '@material-ui/core';

type Props = {
  label?: string;
  onClick?: (event?: any) => void;
  className?: string;
  disabled?: boolean;
  icon?: any;
};

const CustomIconButton = ({
  label,
  icon,
  onClick,
  className,
  disabled,
}: Props) => {
  return (
    <IconButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      data-tip={label}
      size={'small'}>
      {icon}
    </IconButton>
  );
};

export default CustomIconButton;
