import React from 'react';
import { Button } from '@material-ui/core';
import { IButton } from '../../defaultTypes';

const CustomButton: React.FC<IButton> = ({ buttonCaption, color, variant, onClick, className, size }) => {
  return (
    <Button
      size={size}
      variant={variant || 'contained'}
      color={color || 'primary'}
      onClick={onClick}
      className={className}
    >
      {buttonCaption}
    </Button>
  );
};

export default CustomButton;
