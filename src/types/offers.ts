export type TOffer = {
  id: string;
  title: string;
  type: string;
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
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;

};

export type TFullOffers = TFullOffer[];

export type TCity = {
  name: string;
  location: TLocation;
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

// export type MarkerProps = Omit<TCity, 'location:zoom'>;

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
