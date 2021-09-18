export enum ModalActions {
  CLOSE_MODAL = 'CLOSE_MODAL',
  CONNECT_TO_LOBBY = 'CONNECT_TO_LOBBY',
  KICK_PLAYER = 'KICK_PLAYER',
}

export enum ModalTypes {
  CONNECT_TO_LOBBY = 'connectToLobby',
  KICK_PLAYER = 'kickPlayer',
}

export type IModalState = IGlobalModalState | IStateForConnect | IStateForKick;
export type IModalActionPayloads = IConnectToLobbyPayload | IKickPlayerPayload;
export type IModalActions = IConnectToLobbyAction | IKickPlayerAction;

//  STATE
export interface IGlobalModalState {
  isOpen: boolean;
  modalType?: ModalTypes.CONNECT_TO_LOBBY | ModalTypes.KICK_PLAYER;
  linkToLobby?: string;
  player?: string;
  initiator?: string;
}

interface IStateForConnect extends IGlobalModalState {
  modalType: ModalTypes.CONNECT_TO_LOBBY;
  linkToLobby: string;
}

interface IStateForKick extends IGlobalModalState {
  modalType: ModalTypes.KICK_PLAYER;
  player: string;
  initiator?: string;
}

//  PAYLOADS
export interface IConnectToLobbyPayload {
  linkToLobby: string;
}

export interface IKickPlayerPayload {
  player: string; // ID
  initiator: string; // ID
}

//  ACTIONS
interface IConnectToLobbyAction {
  type: ModalActions.CONNECT_TO_LOBBY;
  payload: IConnectToLobbyPayload;
}

interface IKickPlayerAction {
  type: ModalActions.KICK_PLAYER;
  payload: IKickPlayerPayload;
}
