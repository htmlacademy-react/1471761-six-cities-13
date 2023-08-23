import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offers';
import { TComment, TCommentData } from '../types/comments';
import { AuthorizationStatus, APIRoute } from '../const';
import { TUserData } from '../types/user-data';


export const setActiveCity = createAction<string>('OFFERS/setActiveCity');

export const fetchOffers = createAction('OFFERS/fetch', (offers: TOffer[]) => ({ payload: offers }));
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const fetchOffer = createAction<TFullOffer>('OFFER/fetch');
export const setFullOfferDataLoadingStatus = createAction<boolean>('data/setFullOfferDataLoadingStatus');

export const loadComments = createAction('COMMENTS/fetch', (comments: TComment[] | null) => ({ payload: comments }));
export const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');

export const fetchNearPlaceOffers = createAction('NEARPLACESOFFER/fetch', (nearPlaceOffers: TOffer[] | null) => ({ payload: nearPlaceOffers }));
export const setNearPlaceOffersLoading = createAction<boolean>('DATA/setOffersNeighbouhoodError');

export const dropOffer = createAction('OFFER/drop');

export const fetchFavorites = createAction<TOffer[]>('FAVORITES/fetch');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

//export const setError = createAction<string | null>('offer/setError');

export const setAuthInfo = createAction('USER/setUserInfo', (userInfo: TUserData | null) => ({payload: userInfo }));

export const postComment = createAction('REVIEWS/post', (newComment: TCommentData) => ({ payload: newComment }));

export const redirectToRoute = createAction<APIRoute>('offer/redirectToRoute');
