import { NameSpace } from '../../const';
import { TFullOffer, TOffer } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): TOffer[] => state[NameSpace.Data].offers;
export const isOffersStatusLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;

export const getOffer = (state: State): TFullOffer | null => state[NameSpace.Data].fullOffer;
export const isOfferStatusLoading = (state: State): boolean => state[NameSpace.Data].isFullOfferDataLoading;

export const getNearPlaceOffers = (state: State): TOffer[] | null => state[NameSpace.Data].nearPlaceOffers;
export const isNearPlaceOffersStatusLoading = (state: State): boolean => state[NameSpace.Data].isNearPlaceOffersLoading;

export const getActiveCity = (state: State): string => state[NameSpace.Data].activeCity;

export const getFavoriteOffers = (state: State): TOffer[] => state[NameSpace.Data].favorites;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
