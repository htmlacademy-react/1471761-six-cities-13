import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { TOffer, TFullOffer } from '../types/offers.js';

import { saveToken, dropToken } from '../services/token';
import { AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { TAuthData } from '../types/auth-data';
import { TComment } from '../types/comments.js';
import { TUserData } from '../types/user-data.js';
import { store } from './.';
import { APIRoute } from '../const';

import {
  fetchOffer,
  fetchOffers,
  fetchFavorites,
  loadComments,
  setCommentsDataLoadingStatus,
  setFullOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
  requireAuthorization,
  setError,
  setNearPlaceOffersLoading,
  redirectToRoute,
  checkAuthInfo,
  fetchNearPlaceOffers
} from './action';

export const clearErrorAction = createAsyncThunk(
  'offer/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(fetchOffers(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'OFFER/fetch',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setFullOfferDataLoadingStatus(true));
      const { data } = await api.get<TFullOffer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setFullOfferDataLoadingStatus(false));
      dispatch(fetchOffer(data));
    } catch {
      dispatch(setFullOfferDataLoadingStatus(true));
      dispatch(redirectToRoute(APIRoute.NotFound));
      dispatch(setFullOfferDataLoadingStatus(false));
    }
  }
);

export const fetchNearPlaceOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'NEARPLACES/fetch',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setNearPlaceOffersLoading(true));
      const {data} = await api.get<TOffer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
      dispatch(setNearPlaceOffersLoading(false));
      dispatch(fetchNearPlaceOffers(data));
    } catch {
      dispatch(setNearPlaceOffersLoading(true));
      dispatch(redirectToRoute(APIRoute.NotFound));
      dispatch(setNearPlaceOffersLoading(false));
    }
  },
);

export const fetchCommentsOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'REVIEWS/fetch',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setCommentsDataLoadingStatus(true));
      const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${offerId}`);
      dispatch(setCommentsDataLoadingStatus(false));
      dispatch(loadComments(data));
    } catch {
      dispatch(setCommentsDataLoadingStatus(true));
      dispatch(redirectToRoute(APIRoute.NotFound));
      dispatch(setCommentsDataLoadingStatus(false));
    }
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FAVORITES/fetch',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<TOffer[]>(APIRoute.Favorites);
      dispatch(fetchFavorites(data));
    } catch {
      throw new Error();
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<TUserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(checkAuthInfo(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(checkAuthInfo(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(APIRoute.Login));
    dispatch(fetchFavoritesAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(checkAuthInfo(null));
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
