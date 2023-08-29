export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}


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

export enum HousingTypes {
  hotel = 'Hotel',
  apartment = 'Apartment',
  room = 'Private Room',
  house = 'House',
}

export const STARS_COUNT = 5;
export const MIN_CHARACTERS_COUNT = 50;
export const MAX_CHARACTERS_COUNT = 300;

export const RATING_TITLES = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
] as const;

export enum TypeOfCards {

  FavoritePage = 'favorites',
  AllPages = 'cities',
}

export const SortOffersType = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HightToLow: 'Price: high to low',
  TopRated: 'Top rated first',
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


export enum APIRoute {
  Offers = '/offers',
  NearPlaces = '/nearby',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  NotFound = '/404',
  Comments = '/comments',
}

export enum NameSpace {
  Data = 'DATA',
  Comment = 'COMMENT',
  User = 'USER',
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}
