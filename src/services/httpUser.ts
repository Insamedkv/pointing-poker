/* eslint-disable no-async-promise-executor */
import axios from 'axios';
import { UserResp } from './serviceTypes';

export const getUserById = async (userId: string) => {
  return new Promise<UserResp>(async (res, rej) => {
    try {
      const response = await axios.get(`/users/${userId}`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};

export const deleteUserById = async (userId: string) => {
  return new Promise<any>(async (res, rej) => {
    try {
      const response = await axios.delete(`/users/${userId}`);
      res(response.data);
    } catch (err) {
      rej(err);
    }
  });
};
