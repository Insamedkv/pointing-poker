import io, { Socket } from 'socket.io-client';
import { Event } from './constants';
import { Bet, ChatMessage, IssueCreate, IssueUpdate, SocketRules, UserSocket, VoteResult } from './serviceTypes';

export class SocketService {
  private socket: Socket = {} as Socket;

  public init(): SocketService {
    console.log('Initializing Socket Service');
    this.socket = io('http://localhost:4000/api');
    return this;
  }

  public join(userRoom: UserSocket): void {
    console.log(`${userRoom.userId} joined ${userRoom.roomId}`);
    this.socket.emit(Event.JOIN, userRoom);
  }

  public message(message: ChatMessage): void {
    console.log(`Sending Message: ${message}`);
    this.socket.emit(Event.MESSAGE, message);
  }

  public bet(bet: Bet): void {
    console.log(`Sending bet: ${bet}`);
    this.socket.emit(Event.BET, bet);
  }

  public issueCreate(issue: IssueCreate): void {
    console.log(`Issue: ${issue}`);
    this.socket.emit(Event.ISSUE_CREATE, issue);
  }

  public issueUpdate(issue: IssueUpdate): void {
    console.log(`Issue: ${issue}`);
    this.socket.emit(Event.ISSUE_UPDATE, issue);
  }

  public titleUpdate(roomTitle: string, roomId: string): void {
    console.log(`${roomTitle} title chainged in room ${roomId}`);
    this.socket.emit(Event.TITLE_UPDATE, { roomTitle, roomId });
  }

  public voteStart(roomId: string): void {
    console.log(`Room ${roomId}`);
    this.socket.emit(Event.VOTE_START, roomId);
  }

  public voteEnd(roomId: string, vote: boolean): void {
    console.log(`In ${roomId} voted ${vote}`);
    this.socket.emit(Event.VOTE_END, { roomId, vote });
  }

  public voteResult(voteRes: VoteResult): void {
    console.log(`Vote: ${voteRes}`);
    this.socket.emit(Event.VOTE_RESULT, voteRes);
  }

  public setRules(rules: SocketRules): void {
    console.log(`Rules: ${rules}`);
    this.socket.emit(Event.JOIN, rules);
  }

  public disconnect(): void {
    console.log('Disconnecting...');
    this.socket.disconnect();
  }
}
