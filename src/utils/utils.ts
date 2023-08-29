import { SortOffersType, STARS_COUNT } from '../const';
import { TOffer } from '../types/offers';
import { TSorting } from '../types/sorting';


export const getRating = (rating: number): string =>
  `${Math.round(rating) / STARS_COUNT * 100}%`;


export const getPercent = (number: number): string =>
  `${((Math.round(number) * 100) / STARS_COUNT) * 20}%`;


export const getOffersByCity = (city: string | undefined, offers: TOffer[]): TOffer[] =>
  offers.filter((offer) => city === offer.city.name);


export const sortOffersByType = (offers: TOffer[], type: TSorting): TOffer[] => {
  switch (type) {
    case SortOffersType.LowToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.HightToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }

};

