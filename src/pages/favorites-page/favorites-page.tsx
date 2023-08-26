import { Helmet } from 'react-helmet-async';
import HeaderMemo from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
//import { TOffer } from '../../types/offers';
//import { Link } from 'react-router-dom';
import FavoritesEmptyPage from './favorites-empty-page';
//import OfferList from '../../components/offers-list/offers-list';
import { getFavoriteOffers } from '../../store/data-process/data-process.selectors';
//import { AppRoute } from '../../const';
import FavoritesGroup from '../../components/favorite-group/favorite-group';

//type TOffersByCity = {
// [city: string]: TOffer[];
//}

/*const getOffersByCity = (offers: TOffer[]) =>
  offers.reduce((cityGroup: TOffersByCity, offer) => {

    const city = offer.city.name;

    if (!cityGroup[city]) {
      cityGroup[city] = [];
    }

    cityGroup[city].push(offer);

    return cityGroup;
  }, {});  */


function FavoritesPage() {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  //const favoriteOffersByCity = getOffersByCity(favoriteOffers);


  return (

    <div className={favoriteOffers.length ? 'page' : 'page page--favorites-empty'}>
      <Helmet>
        <title>Six Cities -your favorite offers</title>
      </Helmet>
      <HeaderMemo isUserNavigation />
      {favoriteOffers.length ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesGroup favoriteOffers={favoriteOffers} />
            </section>
          </div>
        </main>
        :
        <FavoritesEmptyPage />}
      <Footer />
    </div>
  );
}

export default FavoritesPage;
