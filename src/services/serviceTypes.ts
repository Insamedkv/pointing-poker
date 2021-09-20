// request interface
export interface SignupData {
  firstName: string;
  lastName?: string;
  position?: string;
  avatar?: string;
  role: string;
}

export interface Issue {
  issueTitle: string;
  priority: string;
  link: string;
}

export interface UpdateBet {
  betId: string;
  content: string;
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

// response interface
export interface BaseResponse {
  success: boolean;
}

export interface IssueResp {
  _id: string;
  issueTitle: string;
  priority: string;
  link: string;
}

export interface SignupResp {
  authorization: string;
  room?: string;
  userData: UserResp;
}

export interface UserResp {
  _id: string;
  firstName: string;
  lastName?: string;
  position?: string;
  avatar: string;
  cloudinary_id?: string;
  role: string;
}

export interface MessagesResp {
  _id: string;
  content: string;
  userId: string;
  roomId: string;
}

export interface BetResp {
  _id: string;
  content: string;
  userId: string;
  roomId: string;
  issueId: string;
}

// socket interface
export interface UserSocket {
  socketId: string;
  userId: string;
  roomId: string;
}

export interface ChatMessage {
  roomId: string;
  userId?: string;
  content: string;
}

export interface Bet {
  roomId: string;
  userId: string;
  issueId: string;
  content: string;
}

export interface IssueCreate {
  roomId: string;
  issue: Issue;
}

export interface IssueUpdate {
  issueId: string;
  roomId: string;
  issue: Issue;
}

export interface VoteResult {
  roomId: string;
  vote: number;
  userForKickId: string;
}

export interface SocketRules {
  roomId: string;
  rules: Rules;
}
