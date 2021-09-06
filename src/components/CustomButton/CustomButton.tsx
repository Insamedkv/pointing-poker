import React from 'react';
import { Button } from '@material-ui/core';
import { IButton } from '../../defaultTypes';

const CustomButton: React.FC<IButton> = ({ buttonCaption, color, variant, onClick, className, size }) => {
  return (
    <Button size={size} variant={variant} color={color} onClick={onClick} className={className}>
      {buttonCaption}
    </Button>
  );
};

export default CustomButton;
