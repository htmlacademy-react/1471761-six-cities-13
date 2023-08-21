import { TUser } from './comments';

export type TUserData = {
  id: number;
  email: string;
  token: string;
} & TUser;

