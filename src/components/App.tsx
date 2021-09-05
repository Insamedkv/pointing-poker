import React, { FC, ReactElement } from 'react';
import { Header } from './Header/index';
import { Main } from './Main/index';
import { Footer } from './Footer/index';
import ModalWindow from './Modal';
import CustomInput from './CustomInput';

export const App: FC = (): ReactElement => {
  return (
    <div className="wrapper">
      <ModalWindow />
      <CustomInput />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
