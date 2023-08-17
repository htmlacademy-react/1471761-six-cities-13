import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { ReviewList } from '../../components/reviews-list/review-list';
import Map from '../../components/map/map';
import ReviewForm from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getPercent } from '../../utils/utils';
import OffersList from '../../components/offers-list/offers-list';
import { dropOffer } from '../../store/action';
//import NotFoundPage from '../not-found-page/not-found-page';
import Loading from '../loading-page/loading-page';
import { fetchCommentsOfferAction, fetchNearPlacesOfferAction, fetchOfferAction } from '../../store/api-action';


function OfferPage() {

  const { offerId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchNearPlacesOfferAction(offerId));
      dispatch(fetchCommentsOfferAction(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);


  const currentOffer = useAppSelector((state) => state.offer);
  //const currentOffer = offers.find((offer) => offer.id === offerId);
  const comments = useAppSelector((state) => state.comments);
  const isCommentsDataLoading = useAppSelector((state) => state.isCommentsDataLoading);
  const isFullOfferLoading = useAppSelector((state) => state.isFullOfferDataLoading);

  const isNearPlaceOfferLoading = useAppSelector((state) => state.isNearPlaceOfferLoading);
  const nearPlaceOffersList = useAppSelector((state) => state.nearPlaceOffers);
  const nearPlaceOffers = nearPlaceOffersList?.slice(0, 3);

  if (currentOffer === null || isFullOfferLoading || isNearPlaceOfferLoading || isCommentsDataLoading) {
    return (
      <Loading />
    );
  }

  //if (currentOffer.city.name === offer.city.name).filter((offer) => offer.id !== offerId).slice(0, 3);

  //const mapOffers = [...nearPlacesOffers, currentOffer];
  //const { avatarUrl, name, isPro } = currentOffer.host;


  const mapOffers = nearPlaceOffers && [...nearPlaceOffers, currentOffer];
  const { images, description, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods } = currentOffer;

  return (

    <div className="page">
      <Helmet>
        <title>Six Cities -best offers</title>
      </Helmet>

      <Header />

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
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button
                  className={isFavorite
                    ? 'offer__bookmark-button offer__bookmark-button--active button'
                    : 'offer__bookmark-button button'}
                  type="button"
                >
                  <svg
                    className="offer__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    To bookmarks
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getPercent(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((good) => (<li className="offer__inside-item" key={good}>{good}</li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                  <div className="offer__description">
                    <p className="offer__text">
                      {description}
                    </p>
                    <section className="offer__reviews reviews">
                      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                      {comments && <ReviewList comments={comments} />}
                      <ReviewForm />
                    </section>
                  </div>

                </div>
                <section className="offer__map map">
                  <Map
                    cardType={'offer'}
                    city={nearPlaceOffers[0].city}
                    offers={mapOffers}
                    currentOffer={currentOffer}
                  />
                </section>
                <div className="container">
                  <section className="near-places places">
                    <h2 className="near-places__title">
                      Other places in the neighbourhood
                    </h2>
                    <OffersList
                      offers={nearPlacesOffers}
                    />
                  </section>
                </div>

              </div >
            </div>


          </div>
        </section>
      </main>
    </div >
  );
}

export default OfferPage;
