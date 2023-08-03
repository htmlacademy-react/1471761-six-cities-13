import { AppRoute } from '../const';
import { TOffer } from '../types/offers';
import { calcRating } from '../utils/common';
import { Link, generatePath } from 'react-router-dom';


type CardProp = {
  item: TOffer;
  className: string;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

/*const housingTypes = {
  hotel: 'Hotel',
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
} as const;
*/

function Card({ item, className, onMouseEnter, onMouseLeave }: CardProp): JSX.Element {
  const { id, title, type, rating, price, isPremium, isFavorite, previewImage } = item;

  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  const PlaceCardMark = (): JSX.Element => (

    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && <PlaceCardMark />}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, {id: item.id})}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${calcRating(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div >
    </article >
  );
}

export default Card;
