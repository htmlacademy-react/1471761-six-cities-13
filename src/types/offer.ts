import { Location, City } from './offers.ts';

export type SingleOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;

};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
