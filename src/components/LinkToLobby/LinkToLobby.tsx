import React from 'react';
import { Button, Container, Input, InputLabel } from '@material-ui/core';
import { buttonTextConstants } from 'utils/buttonTextConstants';
import { useStyles } from './LinkToLobby.sltyles';

interface ILinkToLobbyProps {
  link?: string;
}

const LinkToLobby: React.FC<ILinkToLobbyProps> = ({ link }) => {
  const classes = useStyles();

  const copyLink = () => {
    if (link) navigator.clipboard.writeText(link);
  };

  return (
    <>
      <InputLabel className={classes.inputLabel}>Link to lobby:</InputLabel>
      <Container className={classes.container}>
        <Input
          type="text"
          fullWidth
          disableUnderline
          readOnly
          value={link || ''}
          classes={{ root: classes.root, focused: classes.focused, input: classes.input }}
        />
        <Button color="primary" variant="contained" className={classes.inputButton} onClick={copyLink}>
          {buttonTextConstants.COPY}
        </Button>
      </Container>
    </>
  );
};

export default LinkToLobby;
