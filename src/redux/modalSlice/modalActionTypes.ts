import { IUserInfo } from 'defaultTypes';
import { UserResp } from 'services/serviceTypes';

export enum ModalActions {
  CLOSE_MODAL = 'CLOSE_MODAL',
  CONNECT_TO_LOBBY = 'CONNECT_TO_LOBBY',
  KICK_PLAYER = 'KICK_PLAYER',
  ADMIT_PLAYER = 'ADMIT_PLAYER',
}

export enum ModalTypes {
  CONNECT_TO_LOBBY = 'connectToLobby',
  KICK_PLAYER = 'kickPlayer',
  CREATE_ISSUE = 'createIssue',
  ADMIT_PLAYER = 'admitPlayer',
}

export type IModalState = IGlobalModalState | IStateForConnect | IStateForKick | IStateAdmit;
export type IModalActionPayloads = IConnectToLobbyPayload | IKickPlayerPayload;
export type IModalActions = IConnectToLobbyAction | IKickPlayerAction;

//  STATE
export interface IGlobalModalState {
  isOpen: boolean;
  modalType?: ModalTypes.CONNECT_TO_LOBBY | ModalTypes.KICK_PLAYER | ModalTypes.CREATE_ISSUE | ModalTypes.ADMIT_PLAYER;
  roomId?: string;
  player?: UserResp | IUserInfo;
  initiator?: UserResp;
  editableIssueID?: string;
}

interface IStateForConnect extends IGlobalModalState {
  modalType: ModalTypes.CONNECT_TO_LOBBY;
  roomId: string;
}

interface IStateForKick extends IGlobalModalState {
  modalType: ModalTypes.KICK_PLAYER;
  player: UserResp;
  initiator?: UserResp;
}

interface IStateAdmit extends IGlobalModalState {
  modalType: ModalTypes.ADMIT_PLAYER;
  player: UserResp;
}

//  PAYLOADS
export interface IConnectToLobbyPayload {
  roomId: string;
}

export interface IKickPlayerPayload {
  player: UserResp; // ID
  initiator: UserResp; // ID
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
