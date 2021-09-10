import React, { ChangeEvent, useState } from 'react';
import path from 'path';
import { Button, Container, Input, InputLabel } from '@material-ui/core';
import { useStyles } from './FileChooser.styles';

interface IFileChooserProps {
  value?: string;
  fieldName?: string;
  getFile?: (name: string, value: string) => void;
  setImage?: (src: ArrayBuffer | string) => void;
}

const FileChooser: React.FC<IFileChooserProps> = ({ fieldName, value, getFile, setImage }) => {
  const classes = useStyles();
  const hiddenInputFile = document.createElement('input');

  const getBase64 = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result && setImage) setImage(reader.result);
      return reader.result;
    };
    reader.onerror = (error) => console.log(error);
  };

  if (fieldName) hiddenInputFile.setAttribute('name', fieldName);
  hiddenInputFile.setAttribute('type', 'file');
  hiddenInputFile.setAttribute('accept', 'image/*');
  hiddenInputFile.addEventListener('change', (event: Event) => {
    if (event.target && getFile) {
      const { name, files } = event.target as HTMLInputElement;
      if (files?.length) {
        const [currentFile] = files;
        getBase64(currentFile);
        getFile(name, currentFile.name);
      }
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
          value={value}
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
