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
    } catch (err) {
      rej(err);
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
      const response = await axios.post(`/room/${roomId}`, data);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const updateRoomTitle = async (roomId: string, title: string) => {
  return new Promise<Rules>(async (res, rej) => {
    try {
      const response = await axios.put(`/room/${roomId}`, title);
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

export const getMessages = async (roomId: string) => {
  return new Promise<MessagesResp>(async (res, rej) => {
    try {
      const response = await axios.post('/messages', roomId);
      res(response.data);
    } catch (error) {
      rej(error);
    }
  });
};

export const getRoomBets = async (roomId: string) => {
  return new Promise<BetResp[]>(async (res, rej) => {
    try {
      const response = await axios.get(`/game/${roomId}`);
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
