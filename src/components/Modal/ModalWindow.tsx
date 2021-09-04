import React, { useState } from 'react';
import { Button, Container, Modal, useTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { ModalBody } from './Components/ModalBody';
import { ModalHeader } from './Components/ModalHeader';
import { useStyles } from './ModalWindow.styles';
import { baseTheme } from '../../utils/customTheme';

const ModalWindow: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(true);
  const someTitle = 'some title';
  const someMessage = "It's a message inside a modal window";

  const closeModalHandler = () => {
    setIsOpened(false);
  };

  return (
    <>
      <ThemeProvider theme={baseTheme}>
        {!isOpened && <Button onClick={() => setIsOpened(!isOpened)}>Show modal</Button>}
        <Modal open={isOpened} onClose={closeModalHandler}>
          <Container className={classes.modal}>
            <ModalHeader text={someTitle} />
            <ModalBody text={someMessage} />

            <Container className={classes.buttonsBlock}>
              <Button className={classes.btn} variant="contained" color="primary">
                confirm
              </Button>
              <Button className={classes.btn} color="secondary" variant="outlined" onClick={closeModalHandler}>
                cancel
              </Button>
            </Container>
          </Container>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default ModalWindow;
