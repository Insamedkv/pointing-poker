import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/styles';
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
          issue={{
            issueID: 'fsdfs-sdfsdf-sdf-sdf',
            issueLink: 'http://github.com/',
            issueName: 'issue 333',
            issuePriority: 'medium',
            inProgress: true,
          }}
        />
        <IssueCard
          issue={{
            issueID: 'asdfs-sd42df-shff-sdsf',
            issueLink: 'http://github.com/',
            issueName: 'PAGE 394!',
            issuePriority: 'hight',
            inProgress: false,
          }}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
