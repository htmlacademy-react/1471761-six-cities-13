export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export const Setting = {
  OffersCount: 132
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const housingTypes = {
  hotel: 'Hotel',
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
} as const;

export const OFFER_FEATURES = [
  'Wi-Fi',
  'Heating',
  'Kitchen',
  'Fridge',
  'Washing machine',
  'Coffee machine',
  'Dishwasher',
  'Towels',
  'Baby seat',
  'Cabel TV',
  'Friendly Ghost'
] as const;

export const STARS_COUNT = 5;
export const MIN_CHARACTERS_COUNT = 50;
export const MAX_CHARACTERS_COUNT = 300;

export const TITLE_RATING = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
] as const;

export enum TypeOfClasses {

  FavoritePage = 'favorites',
  AllPages = 'cities',
}

