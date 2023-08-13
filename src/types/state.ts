import { TOffer, TFullOffer } from './offers';
import { store } from '../store/index';

export type InitialState = {
  city: string;
  offers: TOffer[] | TFullOffer[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
