import { HousingTypes } from '../const';
import { TUser } from './comments';

export type TOffer = {
  id: string;
  title: string;
  type: keyof typeof HousingTypes;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type TFullOffer = {
  id: string;
  title: string;
  type: keyof typeof HousingTypes;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;

};


export type TCity = {
  name: string;
  location: TLocation;
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}
