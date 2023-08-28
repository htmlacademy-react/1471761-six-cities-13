import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, HousingTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TOffer } from '../../types/offers';
import { getAutorizationStatus } from '../../store/user-process/user-process.selectors';
import { getRating } from '../../utils/utils';
import { addToFavoriteAction } from '../../store/api-action';

type FavoriteCardProps = {
  offer: TOffer;
}

function FavoriteCard({ offer }: FavoriteCardProps): JSX.Element {

  const { previewImage, price, title, type, isPremium, rating, isFavorite, id } = offer;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAutorizationStatus);

  const onFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(addToFavoriteAction({ status: (!isFavorite ? 1 : 0), id: id }));
      return;
    }
    navigate(AppRoute.Login);
  };

  const PlaceCardMark = (): JSX.Element => (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article className="favorites__card place-card">
      {isPremium && <PlaceCardMark />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={onFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offers/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{HousingTypes[type]}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
