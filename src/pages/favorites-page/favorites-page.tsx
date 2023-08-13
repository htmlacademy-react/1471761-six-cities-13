import { Helmet } from 'react-helmet-async';
import { TFullOffer } from '../../types/offers';
//import NotFoundPage from '../not-found-page/not-found-page';
import { Header } from '../../components/header/header';
//import { AppRoute } from '../../const';
//import { Link } from 'react-router-dom';
//import { CITIES } from '../../const';
//import Card from '../../card/card';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { TOffer } from '../../types/offers';
import { Link } from 'react-router-dom';
import FavoritesEmptyPage from './favorites-empty-page';
import OffersList from '../../components/offers-list/offers-list';

type TOffersByCity = {
  [city: string]: TFullOffer[];
}

const getOffersByCity = (offers: TOffer[]) =>
  offers.reduce((cityGroup: TOffersByCity, offer) => {

    const city = offer.city.name;

    if (!cityGroup[city]) {
      cityGroup[city] = [];
    }

    cityGroup[city].push(offer);

    return cityGroup;
  }, {});


function FavoritesPage() {
  const favoriteOffers = useAppSelector((state) => state.favorites);
  const favoriteOffersByCity = getOffersByCity(favoriteOffers);


  return (

    <div className="page">
      <Helmet>
        <title>Six Cities -your favorite offers</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--favorites">
        {favoriteOffers.length ?
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favoriteOffersByCity).map(([city, offersGroup]) => (
                  <li
                    className="favorites__locations-items"
                    key={city}
                  >
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <OfferList
                        className="favorites__places"
                        offers={offersGroup}
                      />
                    </div>
                  </li>)
                )}
              </ul>
            </section>
          </div> : <FavoritesEmptyPage />}
      </main>
      <Footer />
    </div>

  );
}

export default FavoritesPage;
