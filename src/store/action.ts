import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offers';
import { TComment } from '../types/comments';
import { AuthorizationStatus, APIRoute } from '../const';
import { TUserData } from '../types/user-data';


export const setActiveCity = createAction<string>('OFFERS/setActiveCity');

export const fetchOffers = createAction('OFFERS/fetch', (offers: TOffer[]) => ({ payload: offers }));

export const fetchOffer = createAction<TFullOffer>('OFFER/fetch');

export const loadComments = createAction('COMMENTS/fetch', (comments: TComment[] | null) => ({ payload: comments }));

export const fetchNearPlacesOffers = createAction('NEARPLACESOFFER/fetch', (nearPlacesOffers: TOffer[] | null) => ({ payload: nearPlacesOffers }));

export const dropOffer = createAction('OFFER/drop');

export const fetchFavorites = createAction<TOffer[]>('FAVORITES/fetch');


export const setFullOfferDataLoadingStatus = createAction<boolean>('data/setFullOfferDataLoadingStatus');

export const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offer/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setOffersNearPlacesLoading = createAction<boolean>('DATA/setOffersNeighbouhoodError');

export const checkAuthInfo = createAction('USER/setUserInfo', (userInfo: TUserData | null) => ({ payload: userInfo }));

export const setNearPlacesOffersLoading = createAction<boolean>('DATA/setOffersNeighbouhoodError');

export const redirectToRoute = createAction<APIRoute>('offer/redirectToRoute');
