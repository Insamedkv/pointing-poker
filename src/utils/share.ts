import { getRoomById } from 'services/httpRoom';
import { getUserById } from 'services/httpUser';
import { SignupResp, UserResp } from 'services/serviceTypes';

export const getSession = () => {
  const session = localStorage.getItem('poker-session');
  return session ? JSON.parse(session) : null;
};

export const restoreSession = async () => {
  const session = getSession();
  if (!session) return undefined;
  const { userId, roomId } = session;
  const room = await getRoomById(roomId);
  const user = await getUserById(userId as string);
  const token = localStorage.getItem('poker-auth');

  const res: SignupResp = {
    userData: user,
    room,
    authorization: token || '',
  };

  return res;
};
