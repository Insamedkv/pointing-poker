import io, { Socket } from 'socket.io-client';
import { setIssues } from 'reduxstore/issuesSlice';
import { setUsersNumber, toggleGameInRoom } from 'reduxstore/userSlice';
import { pushMessage } from 'reduxstore/chatSlice/chatSlice';
import { closeModal, waitModal } from 'reduxstore/modalSlice/modalSlice';
import { setCurrentIssue, setUsersBets, stopRoundInRoom, toggleRoundInRoom } from 'reduxstore/gameSlice';
import { kickOutPlayerModal } from 'reduxstore/modalSlice/modalActions';
import { IGamePayloadStatus } from 'defaultTypes';
import { Event } from './constants';
import { Bet, IssueResp, SocketRules, VoteResult } from './serviceTypes';
import { setGameStatus } from './httpRoom';

export class SocketService {
  private token = localStorage.getItem('poker-auth')!;

  private socket: Socket = io('https://rft-planning-poker.herokuapp.com/', {
    query: { token: this.token },
  });

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
      setUsers(users);
    });
  }

  public onTitleUpdate(setNewTitle: any): void {
    this.socket.on(Event.ON_TITLE_UPDATE, (title) => {
      setNewTitle(title);
    });
  }

  public onMessage(dispatch: any): void {
    this.socket.on(Event.MESSAGE, (msg) => dispatch(pushMessage(msg)));
  }

  public bet(bet: Bet): void {
    this.socket.emit(Event.BET, bet);
  }

  public restartRound(issueId: string): void {
    this.socket.emit(Event.RESTART_ROUND, issueId);
  }

  public onBet(dispatch: any): void {
    this.socket.on(Event.ON_BET, (bets: Array<Bet>) => {
      dispatch(setUsersBets(bets));
    });
  }

  public getIssues(dispatch: any): void {
    this.socket.on(Event.ON_ISSUE_CREATE, (issuesList: Array<IssueResp>) => {
      dispatch(setIssues(issuesList));
    });
  }

  public voteStart(roomId: string, player: string, initiator: string): void {
    this.socket.emit(Event.VOTE_START, { roomId, player, initiator });
  }

  public onVoteStart(dispatch: any, currentUser: string): void {
    this.socket.on(Event.ON_VOTE_START, ({ userForKick, initUser, startUsersNumber }) => {
      if (currentUser !== userForKick._id) {
        dispatch(kickOutPlayerModal(userForKick, initUser));
        dispatch(setUsersNumber(startUsersNumber));
      }
    });
  }

  public voteEnd(vote: boolean, userForKickId: string, startUsersNumber: number): void {
    this.socket.emit(Event.VOTE_END, { vote, userForKickId, startUsersNumber });
  }

  public voteResult(voteRes: VoteResult): void {
    this.socket.emit(Event.VOTE_RESULT, voteRes);
  }

  public setRules(rules: SocketRules): void {
    this.socket.emit(Event.JOIN, rules);
  }

  public play(roomId: string): void {
    this.socket.emit(Event.PLAY, roomId);
  }

  public onPlay(setGame: any): void {
    this.socket.on(Event.ON_PLAY, (game: { roomId: string; gameStatus: IGamePayloadStatus }) => {
      console.log('response for start game:', game.gameStatus, 'in room', game.roomId);
      setGame(toggleGameInRoom(game.gameStatus));
    });
  }

  public runRound(roomId: string, issueId: string): void {
    this.socket.emit(Event.RUN_ROUND, { roomId, issueId });
  }

  public onRunRound(dispatch: any): void {
    this.socket.on(Event.ON_RUN_ROUND, ({ isRoundStarted }) => {
      dispatch(toggleRoundInRoom(isRoundStarted));
    });
  }

  public stopRound(roomId: string): void {
    this.socket.emit(Event.STOP_ROUND, roomId);
  }

  public onStopRound(dispatch: any): void {
    this.socket.on(Event.ON_STOP_ROUND, () => {
      dispatch(stopRoundInRoom());
    });
  }

  public setActiveIssue(roomId: string, issueId: string): void {
    this.socket.emit(Event.SET_ACTIVE_ISSUE, { roomId, issueId });
  }

  public onSetActiveIssue(dispatch: any): void {
    this.socket.on(Event.ON_SET_ACTIVE_ISSUE, (issueId: string) => {
      dispatch(setCurrentIssue(issueId));
    });
  }

  public finishGame(roomId: string): void {
    setGameStatus(roomId, 'finished');
    this.socket.emit(Event.FINISH_GAME, roomId);
  }

  public onFinishGame(transferTo: any, link: string, dispatch: any): void {
    this.socket.on(Event.ON_FINISH_GAME, ({ gameStatus }) => {
      transferTo.push(link);
      dispatch(toggleGameInRoom(gameStatus));
    });
  }

  public changeObserverStatus(userId: string, status: boolean): void {
    this.socket.emit(Event.CHANGE_OBSERVER_STATUS, { userId, status });
  }

  public onBlur(dispatch: any): void {
    this.socket.on(Event.BLUR, () => {
      setTimeout(() => {
        dispatch(waitModal());
      }, 1000);
    });
  }

  public unblur(userId: string): void {
    this.socket.emit(Event.UN_BLUR, { userId });
  }

  public admitUser(dispatch: any): void {
    this.socket.on(Event.ADMIT, () => {
      dispatch(closeModal());
    });
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public getSocketId(): string {
    return this.socket.id;
  }

  public removeListener(event: string): void {
    (this.socket as any).removeAllListeners(event);
  }
}
