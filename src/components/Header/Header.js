import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../UI/Container';
import css from './Header.module.css';
import logo from '../../assets/Logo.png';

function Header() {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <NavLink className={css.link} to='#logo'>
            <img className={css.logo} src={logo} alt='logo img' />
          </NavLink>
          <div>
            <NavLink className={css.link} to='/register'>
              Register
            </NavLink>
            <NavLink className={css.link} to='/login'>
              Login
            </NavLink>
            <NavLink className={css.link} to='/'>
              Home
            </NavLink>
            <NavLink className={css.link} to='/add'>
              Add
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
