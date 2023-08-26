import { Helmet } from 'react-helmet-async';
import HeaderMemo from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import FavoritesEmptyPage from './favorites-empty-page';
import { getFavoriteOffers } from '../../store/data-process/data-process.selectors';
import FavoritesGroup from '../../components/favorite-group/favorite-group';


function FavoritesPage() {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

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
