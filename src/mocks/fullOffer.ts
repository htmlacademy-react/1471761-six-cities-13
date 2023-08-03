import { TFullOffer } from '../types/offers';

export const AVATAR_URL = 'https://i.pravatar.cc/128';

export const fullOffersMocks: TFullOffer[] = [
  {
    id: '3da17d58-7f54-4fed-a862-17447ae4287a',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    images: [
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg'
    ],
    goods: [
      'Baby seat',
      'Heating',
      'Coffee machine',
      'Wi-Fi',
      'Washer',
      'Dishwasher',
      'Cable TV',
      'Fridge',
      'Towels',
      'Air conditioning',
      'Breakfast',
      'Kitchen'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    bedrooms: 1,
    maxAdults: 3,
  },
  {
    id: 'a9c8038d-f461-4364-85f2-ba022c559a7f',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 160,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://13.design.pages.academy/static/hotel/14.jpg',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    images: [
      'https://13.design.pages.academy/static/hotel/8.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/15.jpg'
    ],
    goods: [
      'Baby seat',
      'Washer',
      'Air conditioning',
      'Wi-Fi',
      'Coffee machine',
      'Dishwasher',
      'Kitchen',
      'Heating',
      'Cable TV'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    bedrooms: 1,
    maxAdults: 5
  }
];
