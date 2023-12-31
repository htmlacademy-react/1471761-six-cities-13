import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAutorizationStatus } from '../../store/user-process/user-process.selectors';
import { getUserData } from '../../store/user-process/user-process.selectors';
import { getFavoriteOffers } from '../../store/data-process/data-process.selectors';

function UserNavigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const userStatus = useAppSelector(getAutorizationStatus);
  const isLoggedIn = userStatus === AuthorizationStatus.Auth;

  const userData = useAppSelector(getUserData);
  const favorites = useAppSelector(getFavoriteOffers);


  return (
    <nav className="header__nav">
      {isLoggedIn ?
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
                {userData?.avatarUrl
                  &&
                  <img src={userData?.avatarUrl}
                    width={20} height={20}
                    style={{ borderRadius: '50%' }}
                  />}

              </div>
              <span className="header__user-name user__name">{userData?.email}</span>
              { favorites.length > 0 &&
              <span className="header__favorite-count">{favorites.length}</span>}
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to={AppRoute.Main}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
        :
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>}
    </nav>
  );
}

export default UserNavigation;
