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
import { AppRoute } from '../../const';
//import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
//import Loading from '../../pages/loading-page/loading-page';
import Spinner from '../spinner/spinner';
import { getAuthCheckedStatus, getAutorizationStatus } from '../../store/user-process/user-process.selectors';
import { getErrorStatus, isOffersStatusLoading } from '../../store/data-process/data-process.selectors';
import ErrorPage from '../../pages/error-page/error-page';

function App() {
  const authorizationStatus = useAppSelector(getAutorizationStatus);
  const isOffersDataLoading = useAppSelector(isOffersStatusLoading);

  const isAutchChecked = useAppSelector(getAuthCheckedStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  if (hasError) {
    return (
      <ErrorPage />
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
