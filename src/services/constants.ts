export const BASEPATH = document.location.origin;

export enum Event {
  CONNECT = 'connect',
  JOIN = 'join',
  ONJOIN = 'onjoin',
  MESSAGE = 'message',
  LEAVE = 'leave',
  BET = 'bet',
  ON_BET = 'on bet',
  KICK = 'kick',
  ROOM_DELETE = 'room delete',
  USER_DELETE = 'user delete',
  RULES_UPDATE = 'rules update',
  ON_TITLE_UPDATE = 'on title update',
  ISSUE_UPDATE = 'issue update',
  ISSUE_CREATE = 'issue create',
  ON_ISSUE_CREATE = 'on issue create',
  VOTE_START = 'vote start',
  VOTE_END = 'vote end',
  VOTE_RESULT = 'vote result',
  ON_VOTE_START = 'on vote start',
  SET_RULES = 'set rules',
  PLAY = 'play',
  ON_PLAY = 'on play',
  RUN_ROUND = 'run round',
  ON_RUN_ROUND = 'on run round',
  RESTART_ROUND = 'restart round',
  SET_ACTIVE_ISSUE = 'set active issue',
  ON_SET_ACTIVE_ISSUE = 'on set active issue',
  STOP_ROUND = 'stop round',
  ON_STOP_ROUND = 'on stop round',
  FINISH_GAME = 'finish game',
  ON_FINISH_GAME = 'finish game',
  CHANGE_OBSERVER_STATUS = 'change observer status',
  BLUR = 'blur',
  UN_BLUR = 'un blur',
  ADMIT = 'admit',
}

export const ERROR_MESSAGES = {
  ROOM_NOT_FOUND: 'Room does not exist',
  USER_NOT_FOUND: 'User does not exist',
  NO_TOKEN: 'No access token provided',
  UNAUTHORIZED: 'Invalid credentials',
  ENDPOINT_NOT_FOUND: "API endpoint doesn't exist",
};
