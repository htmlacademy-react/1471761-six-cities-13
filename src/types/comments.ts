export type TComment = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}

export type TComments = TComment[];

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
