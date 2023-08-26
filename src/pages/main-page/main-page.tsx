import OffersList from '../../components/offers-list/offers-list';
import HeaderMemo from '../../components/header/header';
import Map from '../../components/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import Tabs from '../../components/tabs/tabs';
import SortingMemo from '../../components/sorting/sorting';
import { TSorting } from '../../types/sorting';
import { sortingOffersByType } from '../../utils/utils';
import { getActiveCity, getOffers } from '../../store/data-process/data-process.selectors';
//import EmptyMain from './empty-main-page';

function MainPage() {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [activeSorting, setActiveSorting] = useState<TSorting>('Popular');

  const currentCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const offersByCity = offers.filter(
    (offer) => offer.city.name === currentCity);

  const onMouseEnter = (id: string) => setSelectedOffer(id);
  const onMouseLeave = () => setSelectedOffer(null);
  const city = offersByCity[0]?.city;

  return (

    <div className="page page--gray page--main">
      < HeaderMemo isUserNavigation />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs currentCity={currentCity} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>

              <SortingMemo
                activeSorting={activeSorting}
                onChange={(newSorting) => setActiveSorting(newSorting)}
              />

              <OffersList
                offers={sortingOffersByType(offersByCity, activeSorting)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />

            </section>
            <div className="cities__right-section">

              <Map
                cardType={'cities'}
                offers={offersByCity}
                city={city}
                selectedOffer={selectedOffer}
              />

            </div>
          </div>
        </div>
      </main>
    </div>

  );
}
export default MainPage;
