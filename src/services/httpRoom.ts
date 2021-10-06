/* eslint-disable no-async-promise-executor */
import { IUserData, IUserInfo, Room } from 'defaultTypes';
import axios from './axios';
import {
  BaseResponse,
  BetResp,
  Issue,
  IssueResp,
  MessagesResp,
  RoomCreatorResp,
  Rules,
  SignupData,
  SignupResp,
  UpdateBet,
  UserResp,
} from './serviceTypes';

export const signup = async (data: IUserData) => {
  return new Promise<SignupResp>(async (res, rej) => {
    try {
      const response = await axios.post('/signup', data);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const getRoomCreator = async (roomId: string) => {
  return new Promise<IUserInfo>(async (res, rej) => {
    try {
      const response = await axios.get(`/room/${roomId}/creator`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const getRoomById = async (roomId: string) => {
  return new Promise<Room>(async (res, rej) => {
    try {
      const response = await axios.get(`/room/${roomId}`);
      res(response.data);
    } catch (err: any) {
      rej(err.response.data.error);
    }
  });
};

export const getRoomUsers = async (roomId: string) => {
  return new Promise<Array<IUserInfo>>(async (res, rej) => {
    try {
      const response = await axios.get(`/room/${roomId}/users`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const createRoomIssue = async (roomId: string, data: Issue) => {
  return new Promise<IssueResp>(async (res, rej) => {
    try {
      const response = await axios.post(`/room/${roomId}/issue`, data);
      console.log('CreateRoomIssue!', data);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const getRoomIssues = async (roomId: string) => {
  return new Promise<IssueResp[]>(async (res, rej) => {
    try {
      const response = await axios.get(`/room/${roomId}/issue`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const updateRoomIssue = async (roomId: string, issueId: string, data: Issue) => {
  return new Promise<IssueResp>(async (res, rej) => {
    try {
      const response = await axios.put(`/room/${roomId}/issue/${issueId}`, data);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const deleteRoomIssue = async (roomId: string, issueId: string) => {
  return new Promise<BaseResponse>(async (res, rej) => {
    try {
      const response = await axios.delete(`/room/${roomId}/issue/${issueId}`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const setRoomRules = async (roomId: string, data: Rules) => {
  return new Promise<Rules>(async (res, rej) => {
    try {
      const response = await axios.put(`/room/${roomId}/rules`, data);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const setGameStatus = async (roomId: string, gameStatus: string) => {
  return new Promise<Rules>(async (res, rej) => {
    try {
      const response = await axios.put(`/room/${roomId}/gamestatus`, { gameStatus });
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const updateRoomTitle = async (roomId: string, roomTitle: string) => {
  return new Promise<Rules>(async (res, rej) => {
    try {
      const response = await axios.put(`/room/${roomId}`, { roomTitle });
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const deleteRoom = async (roomId: string) => {
  return new Promise<BaseResponse>(async (res, rej) => {
    try {
      const response = await axios.delete(`/room/${roomId}`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const leaveRoom = async (roomId: string) => {
  return new Promise<BaseResponse>(async (res, rej) => {
    try {
      const response = await axios.post(`/room/${roomId}/leave`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const getMessages = async () => {
  return new Promise<Array<MessagesResp>>(async (res, rej) => {
    try {
      const response = await axios.get('/messages');
      res(response.data);
    } catch (error) {
      rej(error);
    }
  });
};

export const sendMessage = async (message: string) => {
  return new Promise<MessagesResp>(async (res, rej) => {
    try {
      const response = await axios.post('/messages', { message });
      res(response.data);
    } catch (error) {
      rej(error);
    }
  });
};

export const getRoomBets = async (issueId: string) => {
  return new Promise<BetResp[]>(async (res, rej) => {
    try {
      const response = await axios.get(`/game/${issueId}`);
      res(response.data);
    } catch (error) {
      rej(error);
    }
  });
};

export const updateRoomBet = async (data: UpdateBet) => {
  return new Promise<BetResp>(async (res, rej) => {
    try {
      const response = await axios.put('/game/', data);
      res(response.data);
    } catch (error) {
      rej(error);
    }
  });
};

const download = (data: any) => {
  const blob = new Blob([data], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  console.log('blob', blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', 'download.csv');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const downloadResults = async (roomId: string) => {
  return new Promise<Array<IUserInfo>>(async (res, rej) => {
    try {
      const response = await axios.get(`/download/${roomId}`);
      console.log(response.data);
      download(response.data);
    } catch (err) {
      rej(err);
    }
  });
};
