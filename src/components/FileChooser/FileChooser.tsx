import React, { useState } from 'react';
import path from 'path';
import { Button, Container, Input, InputLabel } from '@material-ui/core';
import { useStyles } from './FileChooser.styles';

const FileChooser: React.FC = () => {
  const classes = useStyles();
  const [fileName, setFileName] = useState('');
  const hiddenInputFile = document.createElement('input');

  hiddenInputFile.setAttribute('type', 'file');
  hiddenInputFile.addEventListener('change', (event) => {
    if (event.target) {
      const fullPath = (event.target as HTMLInputElement).value;
      const name: string = path.basename(fullPath.split('\\').join('/'));
      setFileName(name);
    }
  });

  return (
    <>
      <InputLabel className={classes.inputLabel}>Image:</InputLabel>
      <Container className={classes.container}>
        <Input
          type="text"
          disableUnderline
          readOnly
          value={fileName}
          classes={{ root: classes.root, focused: classes.focused, input: classes.textCentration }}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() => hiddenInputFile.click()}
          className={classes.inputButton}
        >
          FILE
        </Button>
      </Container>
    </>
  );
};

export default FileChooser;
