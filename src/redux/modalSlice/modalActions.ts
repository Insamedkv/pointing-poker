import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { ModalActions as actions, IKickPlayerPayload, ICreateIssueActionPayload } from './modalActionTypes';

const createIssue = createAction<PrepareAction<ICreateIssueActionPayload>>(
  actions.CONNECT_TO_LOBBY,
  (payload: ICreateIssueActionPayload) => {
    return {
      payload,
    };
  }
);

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

export { kickOutPlayer, createIssue };
