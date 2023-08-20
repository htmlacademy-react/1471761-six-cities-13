import { AppRoute } from '../const';
import { TOffer } from '../types/offers';
import { Link, generatePath } from 'react-router-dom';


type CardProp = {
  offer: TOffer;
  cardType: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function Card({ offer, cardType, onMouseEnter, onMouseLeave }: CardProp): JSX.Element {
  const { id, title, type, rating, price, isPremium, isFavorite, previewImage } = offer;

  const onCardMouseEnter = () => {
    onMouseEnter?.(id);
  };

  const onCardMouseLeave = () => {
    onMouseLeave?.();
  };

  const PlaceCardMark = (): JSX.Element => (

    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      {isPremium && <PlaceCardMark />}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, {id: offer.id})}>
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
            <span style={{ width: `${(rating * 20).toString()}%` }} />
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
