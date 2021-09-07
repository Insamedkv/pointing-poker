import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Header } from './Header/index';
import { Main } from './Main/index';
import { Footer } from './Footer/index';
import ModalWindow from './Modal';
import { baseTheme } from '../utils/customTheme';
import { buttonTextConstants } from '../utils/buttonTextConstants';
import Avatara from './Avatara';
import { IAvataraInfo } from '../defaultTypes';
import PersonPanel from './PersonPanel';

interface IButton {
  buttonCaption: string;
  color: 'primary' | 'secondary';
  variant: 'text' | 'outlined' | 'contained' | undefined;
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const App: FC = (): ReactElement => {
  const testButtons: Array<IButton> = [
    {
      buttonCaption: buttonTextConstants.CONFIRM,
      onClick: (event: React.MouseEvent) => {
        console.log(event.target);
      },
      variant: 'contained',
      color: 'primary',
    },
    {
      buttonCaption: buttonTextConstants.CANCEL,
      onClick: (event: React.MouseEvent) => console.log(event.target),
      variant: 'outlined',
      color: 'secondary',
    },
  ];

  return (
    <ThemeProvider theme={baseTheme}>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
        <ModalWindow title={'title'} content={'content'} buttons={testButtons} />
      </div>
    </ThemeProvider>
  );
};
