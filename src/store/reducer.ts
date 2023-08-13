import { createReducer } from '@reduxjs/toolkit/dist/createReducer';
import { TFullOffer } from '../types/offers';
import { TComment } from '../types/comments';
import { CITIES } from '../const';

import {
  fetchOffers,
  fetchNearPlacesOffers,
  fetchComments,
  dropOffer,
  setActiveCity,
  fetchFavorites,
} from './action';


import { commentsMocks } from '../mocks/reviews';
import { fullOffersMocks } from '../mocks/fullOffer';

const DEFAULT_CITY = CITIES[0];

const initialState: {

  fullOffers: TFullOffer[];
  nearPlacesOffers: TFullOffer[];
  comments: TComment[];
  offer: TFullOffer | null;
  favorites: TFullOffer[];
  activeCity: string;
} = {

  fullOffers: fullOffersMocks,
  nearPlacesOffers: [],
  comments: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_CITY
};


const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchOffers, (state) => {
      state.fullOffers = fullOffersMocks;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offer = fullOffersMocks.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlacesOffers, (state, action) => {
      state.nearPlacesOffers = state.fullOffers.filter((item) => state.activeCity === item.city.name).filter((offer) => offer.id !== action.payload).slice(0, 3);
    })
    .addCase(fetchComments, (state) => {
      state.comments = commentsMocks;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlacesOffers = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.fullOffers.filter((offer) => offer.isFavorite);
    })
);

export { reducer };
