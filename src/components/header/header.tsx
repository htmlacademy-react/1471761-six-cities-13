import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';

type HeaderProps = {
  isUserNavigation?: boolean;
}

export function Header({ isUserNavigation }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isUserNavigation && < UserNavigation />}
        </div>
      </div>
    </header>
  );
}
