import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to.top';
//import { useAppDispatch } from '../../hooks';
//import { fetchFavorites } from '../../store/action';
import { AuthorizationStatus, AppRoute } from '../../const';
//import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
//import Loading from '../../pages/loading-page/loading-page';
import Spinner from '../spinner/spinner';

function App() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              < PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}

          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
