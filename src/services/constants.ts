export enum Event {
  CONNECT = 'connect',
  JOIN = 'join',
  ONJOIN = 'onjoin',
  MESSAGE = 'message',
  LEAVE = 'leave',
  BET = 'bet',
  KICK = 'kick',
  ROOM_DELETE = 'room delete',
  USER_DELETE = 'user delete',
  RULES_UPDATE = 'rules update',
  TITLE_UPDATE = 'title update',
  ISSUE_UPDATE = 'issue update',
  ISSUE_CREATE = 'issue create',
  ON_ISSUE_CREATE = 'on issue create',
  VOTE_START = 'vote start',
  VOTE_END = 'vote end',
  VOTE_RESULT = 'vote result',
  SET_RULES = 'set rules',
  PLAY = 'play',
}

export const ERROR_MESSAGES = {
  ROOM_NOT_FOUND: 'Room does not exist',
  USER_NOT_FOUND: 'User does not exist',
  NO_TOKEN: 'No access token provided',
  UNAUTHORIZED: 'Invalid credentials',
  ENDPOINT_NOT_FOUND: "API endpoint doesn't exist",
};
