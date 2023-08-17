/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createReducer } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offers';
import { TComment } from '../types/comments';
import { AuthorizationStatus, CITIES } from '../const';

import {
  fetchOffer,
  fetchOffers,
  fetchNearPlacesOffers,
  loadComments,
  dropOffer,
  setActiveCity,
  fetchFavorites,
  setFullOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
  setCommentsDataLoadingStatus,
  requireAuthorization,
  setError,
} from './action';


//import { commentsMocks } from '../mocks/reviews';
//import { fullOffersMocks } from '../mocks/fullOffer';

const DEFAULT_CITY = CITIES[0];

const initialState: {
  offer: TFullOffer | null;
  offers: TOffer[];
  //fullOffers: TFullOffer[];
  nearPlacesOffers: TOffer[] | null;
  comments: TComment[] | null;
  favorites: TOffer[];
  activeCity: string;
  isOffersDataLoading: boolean;
  isFullOfferDataLoading: boolean;
  isCommentsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
} = {
  offer: null,
  offers: [],
  //fullOffers: [] ,
  nearPlacesOffers: [],
  comments: [],
  favorites: [],
  activeCity: DEFAULT_CITY,
  isOffersDataLoading: false,
  isFullOfferDataLoading: false,
  isCommentsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};


const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(fetchNearPlacesOffers, (state, action) => {
      state.nearPlacesOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlacesOffers = [];
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
);

export { reducer };
