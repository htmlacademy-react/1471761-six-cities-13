import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

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


function App() {
  //const dispatch = useAppDispatch();

  /*useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
*/

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              < PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
