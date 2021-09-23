import io, { Socket } from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';
import { IUserInfo } from 'defaultTypes';
import { Event } from './constants';
import {
  Bet,
  ChatMessage,
  Issue,
  IssueCreate,
  IssueResp,
  IssueUpdate,
  SocketRules,
  UserSocket,
  VoteResult,
} from './serviceTypes';

export class SocketService {
  private socket: Socket = {} as Socket;

  public init(): SocketService {
    console.log('Initializing Socket Service...');
    this.socket = io('http://localhost:4000/');
    return this;
  }

  public test(): void {
    this.socket.on('clientConnected', (id) => console.log('I connected with', id));
  }

  public getUsersInRoom(setUsers: any): void {
    this.socket.on(Event.ONJOIN, (users) => {
      setUsers(users);
    });
  }

  public onDisconnect(): void {
    this.socket.on(Event.KICK, () => {
      alert('You were kicked');
      window.location.href = 'https://google.com/';
    });
  }

  public deleteUserFromRoom(setUsers: any): void {
    this.socket.on(Event.USER_DELETE, (users) => {
      console.log('delete user onSocket:', users);
      setUsers(users);
    });
  }

  public onJoin(user: string): void {
    this.socket.emit(Event.JOIN, user); // redux
  }

  public onMessage(): void {
    this.socket.on(Event.MESSAGE, (msg) => console.log(msg)); // redux
  }

  public bet(bet: Bet): void {
    console.log(`Sending bet: ${bet}`);
    this.socket.emit(Event.BET, bet);
  }

  public issueCreate(roomId: string, issue: Issue): void {
    console.log(`Issue: ${issue}`);
    this.socket.emit(Event.ISSUE_CREATE, { roomId, issue });
  }

  public getIssues(setIssues: any): void {
    this.socket.on(Event.ON_ISSUE_CREATE, (issuesList: Array<IssueResp>) => {
      console.log('Get issues', issuesList);
      setIssues(issuesList);
    });
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

  public getSocketId(): string {
    return this.socket.id;
  }
}
