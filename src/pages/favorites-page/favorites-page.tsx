import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offers';
import NotFoundPage from '../not-found-page/not-found-page';
import { Header } from '../../components/header/header';
//import { AppRoute } from '../../const';
//import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import Card from '../../card/card';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';

type FavoritesProps = {
  offers: TOffer[];
}

function FavoritesPage({ offers }: FavoritesProps) {
  const favorites = offers.filter((offer) => offer.isFavorite);
  if (favorites === null) {
    return (<NotFoundPage />);
    }
    cityGroup[city].push(offer);


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
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => {
                const offerListByCities = offers.filter((offer) => city === offer.city.name);
                if (offerListByCities.length !== 0) {

                  return (

                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">

                        {offerListByCities.map((offer) => {
                          if (offer.isFavorite) {
                            return (
                              <Card key={offer.id} offer={offer} className={'favorites'}
                                onMouseEnter={null} onMouseLeave={null}
                              />
                            );
                          }
                        })}
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default FavoritesPage;
