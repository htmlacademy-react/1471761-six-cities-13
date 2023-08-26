import { NameSpace, Status } from '../../const';
import { TComment } from '../../types/comments';
import { State } from '../../types/state';

export const getComments = (state: State): TComment[] => state[NameSpace.Comment].comments;
export const isCommentsStatusLoading = (state: State): boolean => state[NameSpace.Comment].isCommentsDataLoading;

export const getCommentStatus = (state: State): Status => state[NameSpace.Comment].status;

