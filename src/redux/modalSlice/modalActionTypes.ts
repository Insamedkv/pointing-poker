export enum ModalActions {
  CLOSE_MODAL = 'CLOSE_MODAL',
  CONNECT_TO_LOBBY = 'CONNECT_TO_LOBBY',
  KICK_PLAYER = 'KICK_PLAYER',
}

export enum ModalTypes {
  CONNECT_TO_LOBBY = 'connectToLobby',
  KICK_PLAYER = 'kickPlayer',
  CREATE_ISSUE = 'createIssue',
}

export type IModalState = IGlobalModalState | IStateForConnect | IStateForKick;
export type IModalActionPayloads = IConnectToLobbyPayload | IKickPlayerPayload;
export type IModalActions = IConnectToLobbyAction | IKickPlayerAction;

//  STATE
export interface IGlobalModalState {
  isOpen: boolean;
  modalType?: ModalTypes.CONNECT_TO_LOBBY | ModalTypes.KICK_PLAYER | ModalTypes.CREATE_ISSUE;
  roomId?: string;
  player?: string;
  initiator?: string;
  editableIssueID?: string;
}

interface IStateForConnect extends IGlobalModalState {
  modalType: ModalTypes.CONNECT_TO_LOBBY;
  roomId: string;
}

interface IStateForKick extends IGlobalModalState {
  modalType: ModalTypes.KICK_PLAYER;
  player: string;
  initiator?: string;
}

//  PAYLOADS
export interface IConnectToLobbyPayload {
  roomId: string;
}

export interface IKickPlayerPayload {
  player: string; // ID
  initiator: string; // ID
}

export interface ICreateIssueActionPayload {
  issueName: string;
  issuePriority: 'low' | 'medium' | 'high';
  issueLink?: string;
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
