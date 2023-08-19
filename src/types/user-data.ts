import { TUser } from './offers';

export type TUserData = {
  id: number;
  email: string;
  token: string;
} & TUser;

