import io, { Socket } from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';
import { setIssues } from 'reduxstore/issuesSlice';
import { setUsersNumber, toggleGameInRoom, updateRoomUsers } from 'reduxstore/userSlice';
import { pushMessage } from 'reduxstore/chatSlice/chatSlice';
import { closeModal, waitModal } from 'reduxstore/modalSlice/modalSlice';
import { setCurrentIssue, setUsersBets, stopRoundInRoom, toggleRoundInRoom } from 'reduxstore/gameSlice';
import { kickOutPlayerModal } from 'reduxstore/modalSlice/modalActions';
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
import { setGameStatus } from './httpRoom';

export class SocketService {
  private token = localStorage.getItem('poker-auth')!;

  private socket: Socket = io('https://rft-planning-poker.herokuapp.com/', {
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

  public restartRound(issueId: string): void {
    console.log(`restart round to issue: ${issueId}`);
    this.socket.emit(Event.RESTART_ROUND, issueId);
  }

  public onBet(dispatch: any): void {
    console.log(`Getting bet...`);
    this.socket.on(Event.ON_BET, (bets: Array<Bet>) => {
      console.log(bets);
      dispatch(setUsersBets(bets));
    });
  }

  public getIssues(dispatch: any): void {
    this.socket.on(Event.ON_ISSUE_CREATE, (issuesList: Array<IssueResp>) => {
      console.log('Get issues', issuesList);
      dispatch(setIssues(issuesList));
    });
  }

  public voteStart(roomId: string, player: string, initiator: string): void {
    console.log(`Vote to kick ${player} in room ${roomId} by ${initiator}`);
    this.socket.emit(Event.VOTE_START, { roomId, player, initiator });
  }

  public onVoteStart(dispatch: any, currentUser: string): void {
    this.socket.on(Event.ON_VOTE_START, ({ userForKick, initUser, startUsersNumber }) => {
      console.log(`${initUser.firstName} send request to kick ${userForKick.firstName}`);
      console.log(currentUser, userForKick._id, currentUser !== userForKick._id);
      if (currentUser !== userForKick._id) {
        dispatch(kickOutPlayerModal(userForKick, initUser));
        dispatch(setUsersNumber(startUsersNumber));
      } else {
        console.log(userForKick, 'dont vote!');
      }
    });
  }

  public voteEnd(vote: boolean, userForKickId: string, startUsersNumber: number): void {
    console.log(`${userForKickId} ======> ${vote}(${startUsersNumber})`);
    this.socket.emit(Event.VOTE_END, { vote, userForKickId, startUsersNumber });
  }

  public voteResult(voteRes: VoteResult): void {
    console.log(`Vote: ${voteRes}`);
    this.socket.emit(Event.VOTE_RESULT, voteRes);
  }

  public setRules(rules: SocketRules): void {
    console.log(`Rules: ${rules}`);
    this.socket.emit(Event.JOIN, rules);
  }

  public play(roomId: string): void {
    console.log(`play: ${roomId}`);
    this.socket.emit(Event.PLAY, roomId);
  }

  public onPlay(setGame: any): void {
    this.socket.on(Event.ON_PLAY, (game: { roomId: string; isGameStarted: boolean }) => {
      setGame(toggleGameInRoom(game.isGameStarted));
      console.log('YOU HAVE BEEN TRANSFERED!');
    });
  }

  public runRound(roomId: string, issueId: string): void {
    console.log('Round...');
    this.socket.emit(Event.RUN_ROUND, { roomId, issueId });
  }

  public onRunRound(dispatch: any): void {
    console.log('Round...');
    this.socket.on(Event.ON_RUN_ROUND, ({ isRoundStarted }) => {
      dispatch(toggleRoundInRoom(isRoundStarted));
    });
  }

  public stopRound(roomId: string): void {
    console.log('Round stopped...');
    this.socket.emit(Event.STOP_ROUND, roomId);
  }

  public onStopRound(dispatch: any): void {
    console.log('ON => Round stopped...');
    this.socket.on(Event.ON_STOP_ROUND, () => {
      dispatch(stopRoundInRoom());
    });
  }

  public setActiveIssue(roomId: string, issueId: string): void {
    console.log('Issue: ', issueId);
    this.socket.emit(Event.SET_ACTIVE_ISSUE, { roomId, issueId });
  }

  public onSetActiveIssue(dispatch: any): void {
    console.log('Set active!');
    this.socket.on(Event.ON_SET_ACTIVE_ISSUE, (issueId: string) => {
      dispatch(setCurrentIssue(issueId));
    });
  }

  public finishGame(roomId: string): void {
    console.log('Game finished...');
    setGameStatus(roomId, false);
    this.socket.emit(Event.FINISH_GAME, roomId);
  }

  public onFinishGame(transferTo: any, link: string): void {
    console.log('Game finished => transfer to results!');
    this.socket.on(Event.ON_FINISH_GAME, () => {
      transferTo.push(link);
    });
  }

  public changeObserverStatus(userId: string, status: boolean): void {
    console.log(`Change status ${userId} to ${status}`);
    this.socket.emit(Event.CHANGE_OBSERVER_STATUS, { userId, status });
  }

  public onBlur(dispatch: any): void {
    console.log('WAIT!...');
    this.socket.on(Event.BLUR, () => {
      console.log('Wait plz!');
      setTimeout(() => {
        console.log('Now modal must go on!');
        dispatch(waitModal());
      }, 1000);
    });
  }

  public unblur(userId: string): void {
    console.log('unBlur user!');
    this.socket.emit(Event.UN_BLUR, { userId });
  }

  public admitUser(dispatch: any): void {
    this.socket.on(Event.ADMIT, () => {
      dispatch(closeModal());
    });
  }

  public disconnect(): void {
    console.log('Disconnecting...');
    this.socket.disconnect();
  }

  public getSocketId(): string {
    return this.socket.id;
  }

  public removeListener(event: string) {
    (this.socket as any).removeAllListeners(event);
  }
}
