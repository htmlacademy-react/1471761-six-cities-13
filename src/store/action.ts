import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offers';
import { TComment } from '../types/comments';

export const setActiveCity = createAction<string>('OFFERS/setActiveCity');

export const fetchOffers = createAction('OFFERS/fetch', (offers: TOffer[]) => ({ payload: offers }));

export const fetchOffer = createAction<TFullOffer>('OFFER/fetch');

export const fetchComments = createAction('COMMENTS/fetch', (comments: TComment[] | null) => ({ payload: comments }));

export const fetchNearPlacesOffers = createAction('NEARPLACESOFFER/fetch', (nearPlacesOffers: TOffer[] | null) => ({ payload: nearPlacesOffers }));

export const dropOffer = createAction('OFFER/drop');

export const fetchFavorites = createAction<TOffer[]>('FAVORITES/fetch');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setFullOfferDataLoadingStatus = createAction<boolean>('data/setFullOfferDataLoadingStatus');

export const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');
