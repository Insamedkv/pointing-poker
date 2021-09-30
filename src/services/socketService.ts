import io, { Socket } from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';
import { IUserInfo } from 'defaultTypes';
import { setIssues } from 'reduxstore/issuesSlice';
import { pushMessage } from 'reduxstore/chatSlice/chatSlice';
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
  private token = localStorage.getItem('poker-auth')!;

  private socket: Socket = io('http://localhost:4000/', {
    query: { token: this.token },
  });

  public test(): void {
    this.socket.on('clientConnected', (id) => console.log('I connected with', id));
  }

  public getUsersInRoom(setUsers: any): void {
    this.socket.on(Event.ONJOIN, (users) => {
      setUsers(users);
    });
  }

  public onKick(): void {
    this.socket.on(Event.KICK, () => {
      alert('You were kicked');
      window.location.href = document.location.origin;
    });
  }

  public onDeleteRoom(): void {
    this.socket.on(Event.ROOM_DELETE, () => {
      alert('Room has been deleted!');
      window.location.href = document.location.origin;
    });
  }

  public deleteUserFromRoom(setUsers: any): void {
    this.socket.on(Event.USER_DELETE, (users) => {
      console.log('delete user onSocket:', users);
      setUsers(users);
    });
  }

  public onTitleUpdate(setNewTitle: any): void {
    this.socket.on(Event.ON_TITLE_UPDATE, (title) => {
      setNewTitle(title);
    });
  }

  public onMessage(dispatch: any): void {
    this.socket.on(Event.MESSAGE, (msg) => dispatch(pushMessage(msg))); // redux
  }

  public bet(bet: Bet): void {
    console.log(`Sending bet: ${bet}`);
    this.socket.emit(Event.BET, bet);
  }

  public getIssues(dispatch: any): void {
    this.socket.on(Event.ON_ISSUE_CREATE, (issuesList: Array<IssueResp>) => {
      console.log('Get issues', issuesList);
      dispatch(setIssues(issuesList));
    });
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
