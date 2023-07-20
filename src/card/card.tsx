import { Offer } from '../types/offers';
import { calcRating } from '../utils/common';
import { Link } from 'react-router-dom';

type CardProp = {
  offer: Offer;
}


function Card({ offer }: CardProp): JSX.Element {

  const handleMouseOver = () => '';

  const PlaceCardMark = (): JSX.Element => (

    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article
      className="cities__card place-card"
      onMouseOver={handleMouseOver}
    >
      {offer.isPremium && <PlaceCardMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
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
            <span style={{ width: `${calcRating(offer.rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div >
    </article >
  );
}

export default Card;
