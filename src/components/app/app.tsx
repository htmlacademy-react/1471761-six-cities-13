import MainPage from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offers';


type AppScreenProps = {
  offers: Offer[];
}

function App({offers}: AppScreenProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              < PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
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
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
