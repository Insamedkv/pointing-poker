import React from 'react';
import { Button } from '@material-ui/core';

interface ICustomButtonProps {
  buttonCaption: string;
  color: 'primary' | 'secondary';
  variant: 'text' | 'outlined' | 'contained' | undefined;
  className: string;
  onClick?: React.MouseEventHandler;
}

const CustomButton: React.FC<ICustomButtonProps> = ({ buttonCaption, color, variant, onClick, className }) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} className={className}>
      {buttonCaption}
    </Button>
  );
};

export default CustomButton;
