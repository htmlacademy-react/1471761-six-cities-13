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

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const getRating = (rating: number) => Math.floor(rating) * 20;
