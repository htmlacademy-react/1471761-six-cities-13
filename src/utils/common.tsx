import { STARS_COUNT } from '../const';

export const calcRating = (rating: number) => rating / 5 * 100;

export function getStarPercent(number: number): string {

  const percent = Math.round(number * 100 / STARS_COUNT);
  if (percent < 30) {
    return `${20}%`;
  }

  if (percent >= 30 && percent < 50) {
    return `${40}%`;
  }

  if (percent >= 50 && percent < 70) {
    return `${60}%`;
  }

  if (percent >= 70 && percent < 90) {
    return `${80}%`;
  }

  return `${100}%`;
}
