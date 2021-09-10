import React from 'react';
import { Container, Modal } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ModalBody } from './Components/ModalBody';
import { useStyles } from './ModalWindow.styles';
import CustomButton from '../CustomButton';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { toggleModal } from '../../redux/modalReducer/modalActions';

const ModalWindow: React.FC = () => {
  const classes = useStyles();
  const modalState = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(toggleModal(false));
  };

  return (
    <>
      <Modal open={modalState.isOpen} onClose={closeModalHandler}>
        <Container className={classes.modal}>
          <ModalBody Content={modalState.Component} />

          {/* <Container className={classes.buttonsBlock}>
            {modalState.buttons.map((button) => (
              <CustomButton
                key={button.buttonCaption}
                buttonCaption={button.buttonCaption}
                variant={button.variant}
                color={button.color}
                className={classes.btn}
                onClick={button.onClick}
              />
            ))} 
          </Container> */}
        </Container>
      </Modal>
    </>
  );
};

export default ModalWindow;
