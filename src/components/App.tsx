import React, { FC, ReactElement } from 'react';
import { Header } from './Header/index';
import { Main } from './Main/index';
import { Footer } from './Footer/index';
import ModalWindow from './Modal';

export const App: FC = (): ReactElement => {
  return (
    <div className="wrapper">
      <ModalWindow />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
