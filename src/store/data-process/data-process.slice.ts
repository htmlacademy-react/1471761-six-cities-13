import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOffers } from '../../types/state';
import { CITIES, NameSpace } from '../../const';
import {
  fetchNearPlaceOfferAction,
  fetchFavoritesAction,
  fetchOffersAction,
  fetchOfferAction
} from '../api-action';

import { toast } from 'react-toastify';

const DEFAULT_CITY = CITIES[0];

const initialState: TOffers = {
  offers: [],
  fullOffer: null,
  nearPlaceOffers: [],
  favorites: [],
  isOffersDataLoading: false,
  isFullOfferDataLoading: false,
  isNearPlaceOffersLoading: false,
  activeCity: DEFAULT_CITY,
  hasError: false,
};

export const offers = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.fullOffer = null;
      state.nearPlaceOffers = [];
    },
    setActiveCity: (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        toast.warn('Failed to fetch offers. Please, try again later');
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isFullOfferDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.fullOffer = action.payload;
        state.isFullOfferDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isFullOfferDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchNearPlaceOfferAction.pending, (state) => {
        state.isNearPlaceOffersLoading = true;
      })
      .addCase(fetchNearPlaceOfferAction.fulfilled, (state, action) => {
        state.nearPlaceOffers = action.payload;
        state.isNearPlaceOffersLoading = false;
      })
      .addCase(fetchNearPlaceOfferAction.rejected, (state) => {
        state.isNearPlaceOffersLoading = false;
        toast.warn('Failed to fetch offers near by. Please, try again later');
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  }
});

export const { dropOffer, setActiveCity } = offers.actions;
