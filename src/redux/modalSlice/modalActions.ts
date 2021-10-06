import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { UserResp } from 'services/serviceTypes';
import { ModalActions as actions, IKickPlayerPayload } from './modalActionTypes';

const kickOutPlayerModal = createAction<PrepareAction<IKickPlayerPayload>>(
  actions.KICK_PLAYER,
  (player: UserResp, initiator: UserResp) => {
    return {
      payload: {
        player,
        initiator,
      },
    };
  }
);

export { kickOutPlayerModal };
