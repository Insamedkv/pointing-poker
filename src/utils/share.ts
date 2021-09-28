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

// number generators
export function* fibonacciCardValues(): Generator<number> {
  let fn1 = 2;
  let fn2 = 1;
  while (true) {
    const current = fn2;
    fn2 = fn1;
    fn1 += current;
    const reset = yield current;
    if (reset) {
      fn1 = 2;
      fn2 = 1;
    }
  }
}

export function* doubleCardValues(): Generator<number> {
  let index = 1;
  while (true) yield (index *= 2);
}
