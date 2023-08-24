/*
import { createReducer } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offers';
import { TComment } from '../types/comments';
import { AuthorizationStatus, CITIES } from '../const';

import {
  fetchOffer,
  fetchOffers,
  fetchNearPlaceOffers,
  loadComments,
  dropOffer,
  setActiveCity,
  fetchFavorites,
  setFullOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
  setCommentsDataLoadingStatus,
  requireAuthorization,
  setNearPlaceOffersLoading,
  //setError,
  setAuthInfo,
} from './action';
import { TUserData } from '../types/user-data';


const DEFAULT_CITY = CITIES[0];

const initialState: {
  offer: TFullOffer | null;
  offers: TOffer[];
  nearPlaceOffers: TOffer[] | null;
  comments: TComment[] | null;
  userData: TUserData | null;
  favorites: TOffer[];
  activeCity: string;
  isOffersDataLoading: boolean;
  isFullOfferDataLoading: boolean;
  isCommentsDataLoading: boolean;
  isNearPlaceOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  //error: string | null;
} = {
  offer: null,
  offers: [],
  nearPlaceOffers: [],
  comments: [],
  userData: null,
  favorites: [],
  activeCity: DEFAULT_CITY,
  isOffersDataLoading: false,
  isFullOfferDataLoading: false,
  isCommentsDataLoading: false,
  isNearPlaceOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  //error: null,
};


const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(fetchNearPlaceOffers, (state, action) => {
      state.nearPlaceOffers = action.payload;
    })
    .addCase(setNearPlaceOffersLoading, (state, action) => {
      state.isNearPlaceOffersLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaceOffers = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setFullOfferDataLoadingStatus, (state, action) => {
      state.isFullOfferDataLoading = action.payload;
    })
    .addCase(setCommentsDataLoadingStatus, (state, action) => {
      state.isCommentsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthInfo, (state, action) => {
      state.userData = action.payload;
    })
/*.addCase(setError, (state, action) => {
      state.error = action.payload;
    })
);

export { reducer };
*/
