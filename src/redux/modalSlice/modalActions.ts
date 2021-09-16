import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { ModalActions as actions, IModalActionPayloads } from './modalActionTypes';

const connectToLobby = createAction<PrepareAction<IModalActionPayloads>>(
  actions.CONNECT_TO_LOBBY,
  (linkToLobby: string) => {
    return {
      payload: {
        linkToLobby,
      },
    };
  }
);

const kickPlayer = createAction<PrepareAction<IModalActionPayloads>>(
  actions.KICK_PLAYER,
  (player: string, initiator?: string) => {
    return {
      payload: {
        player,
        initiator,
      },
    };
  }
);

export { connectToLobby, kickPlayer };
