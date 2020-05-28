import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const CustomButton = ({ label, onClick, className, disabled }: Props) => {
  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
