import { useParams, useNavigate } from 'react-router-dom';
import HeaderMemo from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { ReviewList } from '../../components/reviews-list/review-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getRating } from '../../utils/utils';
import OffersList from '../../components/offers-list/offers-list';
import { addToFavoriteAction, fetchCommentsOfferAction, fetchNearPlaceOfferAction, fetchOfferAction } from '../../store/api-action';
import classNames from 'classnames';
import HostInfo from '../../components/host/host';
import { HousingTypes, AuthorizationStatus, AppRoute } from '../../const';
import NotFoundPage from '../not-found-page/not-found-page';
import ReviewForm from '../../components/review-form/review-form';
import { getNearPlaceOffers, getOffer, isNearPlaceOffersStatusLoading, isOfferStatusLoading } from '../../store/data-process/data-process.selectors';
import { dropOffer } from '../../store/data-process/data-process.slice';
import { getComments, isCommentsStatusLoading } from '../../store/comments-data/comments-data.selectors';
import { getAutorizationStatus } from '../../store/user-process/user-process.selectors';

function OfferPage() {

  const { id: offerId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentOffer = useAppSelector(getOffer);
  const isFullOfferLoading = useAppSelector(isOfferStatusLoading);

  const comments = useAppSelector(getComments);
  const isCommentsDataLoading = useAppSelector(isCommentsStatusLoading);

  const isNearPlaceOffersLoading = useAppSelector(isNearPlaceOffersStatusLoading);
  const nearPlaceOffersList = useAppSelector(getNearPlaceOffers);

  const authorizationStatus = useAppSelector(getAutorizationStatus);

  const nearPlaceOffers = nearPlaceOffersList?.slice(0, 3);
  const currentComments = comments?.slice(-10);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchNearPlaceOfferAction(offerId));
      dispatch(fetchCommentsOfferAction(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);


  if (isFullOfferLoading || isNearPlaceOffersLoading || isCommentsDataLoading) {
    return;
  }

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const { images, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods, host, description } = currentOffer;
  const mapOffers = nearPlaceOffers && [...nearPlaceOffers, currentOffer];


  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(addToFavoriteAction({ status: (!isFavorite ? 1 : 0), id: offerId as string }));
      return;
    }
    navigate(AppRoute.Login);
  };
  const favClass = classNames(
    'offer__bookmark-button', 'button',
    { 'offer__bookmark-button--active': isFavorite },
  );


  return (

    <div className="page">
      <Helmet>
        <title>Six Cities -best offers</title>
      </Helmet>
      <HeaderMemo isUserNavigation />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images && images.length && images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image"
                    src={image}
                    alt={title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <div className="offer__mark"><span>Premium</span></div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button
                  className={favClass} type="button" onClick={handleFavoriteClick}
                >
                  <svg
                    className="offer__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark">
                    </use>
                  </svg>
                  <span className="visually-hidden">
                    To bookmarks
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRating(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {HousingTypes[type]}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods && goods.length && goods.map((good) =>
                    <li className="offer__inside-item" key={good}>{good}</li>)}
                </ul>
              </div>

              <HostInfo host={host} description={description} />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                {currentComments && <ReviewList comments={currentComments} />}
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <ReviewForm />}
              </section>
            </div>
          </div>

        </section>
        <section className="offer__map map">
          {nearPlaceOffers &&
            <Map
              cardType='offer'
              city={nearPlaceOffers[0].city}
              offers={mapOffers}
              currentOffer={currentOffer}
            />}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            {nearPlaceOffersList && <OffersList offers={nearPlaceOffers} />}
          </section>
        </div>
      </main >
    </div >
  );
}

export default OfferPage;
