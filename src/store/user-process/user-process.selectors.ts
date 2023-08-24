import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { TUserData } from '../../types/user-data';


export const getAutorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].autorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].autorizationStatus !== AuthorizationStatus.Unknown;

export const getUserData = (state: State): TUserData | null => state[NameSpace.User].setAuthData;
