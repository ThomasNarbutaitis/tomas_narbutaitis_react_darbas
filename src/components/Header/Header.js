import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../UI/Container';
import css from './Header.module.css';
import logo from '../../assets/Logo.png';
import { useAuthCtx } from '../../store/authContext';

function Header() {
  const { isUserLoggedIn, logout } = useAuthCtx();

  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <NavLink className={css.link} to='#logo'>
            <img className={css.logo} src={logo} alt='logo img' />
          </NavLink>
          <div>
            {!isUserLoggedIn && (
              <NavLink className={css.link} to='/register'>
                Register
              </NavLink>
            )}
            {!isUserLoggedIn && (
              <NavLink className={css.link} to='/login'>
                Login
              </NavLink>
            )}

            {isUserLoggedIn && (
              <NavLink className={css.link} to='/'>
                Home
              </NavLink>
            )}
            {isUserLoggedIn && (
              <NavLink className={css.link} to='/add'>
                Add
              </NavLink>
            )}
            {isUserLoggedIn && (
              <NavLink onClick={logout} className={css.link} to='/login'>
                Logout
              </NavLink>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
