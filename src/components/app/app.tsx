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
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAutorizationStatus } from '../../store/user-process/user-process.selectors';
import { getErrorStatus} from '../../store/data-process/data-process.selectors';
import ErrorPage from '../../pages/error-page/error-page';

function App() {
  const authorizationStatus = useAppSelector(getAutorizationStatus);

  const hasError = useAppSelector(getErrorStatus);

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
            path={`${AppRoute.Offer}`}
            element={<OfferPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
