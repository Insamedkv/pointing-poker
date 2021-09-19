import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { ModalActions as actions, IKickPlayerPayload } from './modalActionTypes';

const kickOutPlayer = createAction<PrepareAction<IKickPlayerPayload>>(
  actions.KICK_PLAYER,
  (player: string, initiator: string) => {
    return {
      payload: {
        player,
        initiator,
      },
    };
  }
);

export { kickOutPlayer };
