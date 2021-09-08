import React, { useState } from 'react';
import { Container, Modal } from '@material-ui/core';
import { ModalBody } from './Components/ModalBody';
import { ModalHeader } from './Components/ModalHeader';
import { useStyles } from './ModalWindow.styles';
import CustomButton from '../CustomButton';
import { IButton } from '../../defaultTypes';

interface IModalProps {
  title: string;
  content: string | React.FC;
  buttons: Array<IButton>;
}

const ModalWindow: React.FC<IModalProps> = ({ title, content, buttons }) => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(true);

  const closeModalHandler = () => {
    setIsOpened(false);
  };

  return (
    <>
      <Modal open={isOpened} onClose={closeModalHandler}>
        <Container className={classes.modal}>
          <ModalHeader text={title} />
          <ModalBody Content={content as React.FC} />

          <Container className={classes.buttonsBlock}>
            {buttons.map((button) => (
              <CustomButton
                key={button.buttonCaption}
                buttonCaption={button.buttonCaption}
                variant={button.variant}
                color={button.color}
                className={classes.btn}
                onClick={button.onClick}
              />
            ))}
          </Container>
        </Container>
      </Modal>
    </>
  );
};

export default ModalWindow;
