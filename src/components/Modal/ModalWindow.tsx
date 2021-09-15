import React from 'react';
import { Container, Modal } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { toggleModal } from 'reduxstore/modalSlice/modalActions';
import { ModalBody } from './Components/ModalBody';
import { useStyles } from './ModalWindow.styles';

const ModalWindow: React.FC = () => {
  const classes = useStyles();
  const modalState = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(toggleModal({ isOpen: false }));
  };

  return (
    <>
      <Modal open={modalState.isOpen} onClose={closeModalHandler}>
        <Container className={classes.modal}>
          <ModalBody modalType={modalState.modalType} />
        </Container>
      </Modal>
    </>
  );
};

export default ModalWindow;
