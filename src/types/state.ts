import { store } from '../store/index';
import { AuthorizationStatus, Status } from '../const';
import { TFullOffer, TOffer } from './offers';
import { TComment } from './comments';
import { TUserData } from './user-data';

export type TUserProcess = {
  autorizationStatus: AuthorizationStatus;
  setAuthData: TUserData | null;
  status: Status;
}

export type TOffers = {
  offers: TOffer[];
  fullOffer: TFullOffer | null;
  nearPlaceOffers: TOffer[] | null;
  favorites: TOffer[];
  isOffersDataLoading: boolean;
  isFullOfferDataLoading: boolean;
  isNearPlaceOffersLoading: boolean;
  activeCity: string;
  hasError: boolean;
}

export type TComments = {
  comments: TComment[];
  isCommentsDataLoading: boolean;
  status: Status;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
