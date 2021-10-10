import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header">
        <NavLink
          to="/poniedzialek"
          activeClassName="active-link">
            Poniedziałek
        </NavLink>
        <NavLink
          to="/wtorek"
          activeClassName="active-link">
            Wtorek
        </NavLink>
        <NavLink
          to="/sroda"
          activeClassName="active-link">
            Środa
        </NavLink>
        <NavLink
          to="/czwartek"
          activeClassName="active-link">
            Czwartek
        </NavLink>
        <NavLink
          to="/piatek"
          activeClassName="active-link">
            Piątek
        </NavLink>
      </div>
    </header>
  );
}
