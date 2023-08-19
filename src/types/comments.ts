import { TUser } from './offers';

export type TComment = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}

export type TComments = TComment[];

/*
export type TUserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};
*/
