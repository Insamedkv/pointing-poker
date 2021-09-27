export interface IButton {
  buttonCaption: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  onClick?: React.MouseEventHandler;
}

export interface IAvataraInfo {
  firstName: string;
  lastName?: string;
  size: 'large' | 'medium';
  src?: string | ArrayBuffer;
}

export interface IIssue {
  issueName: string;
  issueLink: string;
  issuePriority: string;
  isCurrent: boolean;
  issueID?: string;
}

export interface IInput {
  label?: string;
  type?: 'text' | 'number' | 'file' | 'date';
  readOnly?: boolean;
  required?: boolean;
  value?: string;
}

export interface IUserInfo {
  firstName: string;
  lastName?: string;
  position?: string;
  avatar?: string;
  _id?: string;
}

export interface IUserData {
  firstName: string;
  lastName: string;
  asObserver: boolean;
  position?: string;
  avatar?: string | ArrayBuffer;
}

export interface ICardItemProps {
  name: string;
}

export interface Rules {
  masterAsAPlayer: boolean;
  cardType: any[];
  newUsersEnter: boolean;
  autoRotateCardsAfterVote: boolean;
  changeChoiseAfterCardsRotate: boolean;
  isTimerNeeded: boolean;
  roundTime: number;
}

export interface Issue {
  issueTitle: string;
  priority: string;
  link: string;
}

interface RoomUser {
  user: string;
}

interface RoomCreator {
  roomCreator: string;
}

export interface Room {
  _id: string;
  roomTitle: string;
  rules: Array<Rules>;
  users: Array<RoomUser>;
  issues: Array<Issue>;
  roomCreator: string;
}

export enum ScoreTypes {
  FIBONACHI = 'fibonachi',
  POWEROFTWO = 'poweroftwo',
  CUSTOM = 'custom',
}
