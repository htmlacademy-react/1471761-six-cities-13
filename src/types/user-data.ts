import { TUser } from './review';

export type TUserData = {
  id: number;
  email: string;
  token: string;
} & TUser;

