import { AppRoute, AuthorizationStatus, HousingTypes } from '../../const';
import { TFullOffer, TOffer } from '../../types/offers';
import { Link, useNavigate } from 'react-router-dom';
import { getRating } from '../../utils/utils';
import { addToFavoriteAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAutorizationStatus } from '../../store/user-process/user-process.selectors';
import classNames from 'classnames';

type CardProp = {
  offer: TOffer | TFullOffer;
  cardType: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function Card({ offer, cardType, onMouseEnter, onMouseLeave }: CardProp): JSX.Element {
  const { id, title, type, rating, price, isPremium, isFavorite, previewImage } = offer;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAutorizationStatus);

  const handleCardMouseEnter = () => {
    onMouseEnter?.(id);
  };

  const handleCardMouseLeave = () => {
    onMouseLeave?.();
  };

  const PlaceCardMark = (): JSX.Element => (

    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(addToFavoriteAction({ status: (!isFavorite ? 1 : 0), id: id }));
      return;
    }
    navigate(AppRoute.Login);
  };

  const favClass = classNames(
    'place-card__bookmark-button',
    { 'place-card__bookmark-button--active': isFavorite },
    'button'
  );

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {isPremium && <PlaceCardMark />}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favClass} type="button" onClick={handleFavoriteClick}>
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
            <span style={{ width: getRating(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{HousingTypes[type]}</p>
      </div >
    </article >
  );
}

export default Card;
