import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../context/context';

export const Header = () => {
  const getNavLinkActive = (baseClass: string) => (
    { isActive }: { isActive: boolean },
  ) => {
    return classNames(baseClass, { 'navbar__link--item-active': isActive });
  };

  const { favourites, cart } = useMyContext();

  return (
    <header>
      <div className="navbar__left">
        <div className="navbar__logo">
          <img alt="log" src="./img/logo.svg" />
        </div>
        <nav className="navbar__link">
          <NavLink
            to="/"
            className={getNavLinkActive('navbar__link--item')}
          >
            home
          </NavLink>

          <NavLink
            to="/phones"
            className={getNavLinkActive('navbar__link--item')}
          >
            phones
          </NavLink>

          <NavLink
            to="/tablets"
            className={getNavLinkActive('navbar__link--item')}
          >
            tablets
          </NavLink>

          <NavLink
            to="/accessories"
            className={getNavLinkActive('navbar__link--item')}
          >
            accessories
          </NavLink>
        </nav>
      </div>
      <div className="navbar__right">
        <div className="navbar__search">
          <input
            type="text"
            className="navbar__search--input"
            placeholder="Search..."
          />
          <span className="navbar__search--input-icon">
            <i className="navbar__search--input-icon-item" />
          </span>
        </div>
        <NavLink
          to="/favourites"
          className={getNavLinkActive('navbar__favourites')}
        >
          <img
            alt="favourites"
            src="./img/favourites.svg"
            className="navbar__favourites--image"
          />
          {favourites.length > 0 && (
            <span className="navbar__favourites--image-counter">
              {favourites.length}
            </span>
          )}
        </NavLink>

        <NavLink
          to="/cart"
          className={getNavLinkActive('navbar__cart')}
        >
          <img
            alt="cart"
            src="./img/cart.svg"
            className="navbar__favourites--image"
          />
          {cart.length > 0 && (
            <span className="navbar__favourites--image-counter">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </header>
  );
};