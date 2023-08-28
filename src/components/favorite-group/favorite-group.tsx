import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { TOffer } from '../../types/offers';
import { setActiveCity } from '../../store/data-process/data-process.slice';
import FavoritesList from '../favorites-list/favorites-list';

type FavoritesGroupProps = {
  favoriteOffers: TOffer[];
}

function FavoritesGroup({ favoriteOffers }: FavoritesGroupProps): JSX.Element {

  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  const dispatch = useAppDispatch();

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={() => {
                dispatch(setActiveCity(city));
              }}
              >
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <FavoritesList city={city} favoriteOffers={favoriteOffers} />
        </li>
      ))}
    </ul>
  );
}

export default FavoritesGroup;
