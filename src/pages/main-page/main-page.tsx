import OffersList from '../../components/offers-list/offers-list';
import { Header } from '../../components/header/header';
import Map from '../../components/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import Tabs from '../../components/tabs/tabs';
import Sorting from '../../components/sorting/sorting';
import { TSorting } from '../../types/sorting';
import { sortingOffersByType } from '../../utils/utils';


function MainPage() {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [activeSorting, setActiveSorting] = useState<TSorting>('Popular');

  const currentCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter(
    (offer) => offer.city.name === currentCity);

  const onMouseEnter = (id: string) => setSelectedOffer(id);
  const onMouseLeave = () => setSelectedOffer(null);
  const city = offersByCity[0]?.city;

  return (

    <div className="page page--gray page--main">
      < Header isUserNavigation />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs currentCity={currentCity} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>

              <Sorting
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
