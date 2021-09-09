import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { baseTheme } from '../utils/customTheme';
import IssueCard from './IssueCard';

export const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={baseTheme}>
      <div className="wrapper">
        <Header />
        <IssueCard
          mode="show"
          issue={{
            issueID: 'fsdfs-sdfsdf-sdf-sdf',
            issueLink: 'http://github.com/',
            issueName: 'issue 333',
            issuePriority: 'medium',
            inProgress: true,
          }}
        />
        <IssueCard
          mode="show"
          issue={{
            issueID: 'asdfs-sd42df-shff-sdsf',
            issueLink: 'http://github.com/',
            issueName: 'PAGE 394!',
            issuePriority: 'hight',
            inProgress: false,
          }}
        />
        <IssueCard mode="create" />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
