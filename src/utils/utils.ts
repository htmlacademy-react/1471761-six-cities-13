import { SortOffersType, STARS_COUNT } from '../const';
import { TOffer } from '../types/offers';
import { TSorting } from '../types/sorting';


export const getRating = (rating: number) =>
  `${Math.round(rating) / STARS_COUNT * 100}%`;

function getPercent(number: number): string {
  return `${((Math.round(number) * 100) / STARS_COUNT) * 20}%`;
}

function getOffersByCity(city: string | undefined, offers: TOffer[]): TOffer[] {
  return offers.filter((offer) => city === offer.city.name);
}

function sortingOffersByType(offers: TOffer[], type: TSorting): TOffer[] {
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
}

export { getPercent, getOffersByCity, sortingOffersByType };
