import React, { useState } from 'react';
import { Button, Container, Modal } from '@material-ui/core';
import { ModalBody } from './Components/ModalBody';
import { ModalHeader } from './Components/ModalHeader';
import { useStyles } from './ModalWindow.styles';
import { buttonTextConstants } from '../../utils/buttonTextConstants';

interface IModalProps {
  title?: string;
  content?: string | React.FC;
}

const ModalWindow: React.FC<IModalProps> = ({ title, content }) => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(true);

  const closeModalHandler = () => {
    setIsOpened(false);
  };

  return (
    <>
      {!isOpened && <Button onClick={() => setIsOpened(!isOpened)}>Show modal</Button>}
      <Modal open={isOpened} onClose={closeModalHandler}>
        <Container className={classes.modal}>
          <ModalHeader text={title || 'some title'} />
          <ModalBody content={content || "It's a message inside a modal window"} />

          <Container className={classes.buttonsBlock}>
            <Button className={classes.btn} variant="contained" color="primary">
              {buttonTextConstants.CONFIRM}
            </Button>
            <Button className={classes.btn} color="secondary" variant="outlined" onClick={closeModalHandler}>
              {buttonTextConstants.CANCEL}
            </Button>
          </Container>
        </Container>
      </Modal>
    </>
  );
};

export default ModalWindow;
