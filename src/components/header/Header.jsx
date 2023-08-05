import React from 'react';
import { NavLink } from 'react-router-dom';
import { MoveBut } from './header.styled';

const Header = () => {
  return (
    <nav>
      <NavLink to="/"><MoveBut>Home</MoveBut></NavLink>

      <NavLink to="/movies"><MoveBut>Movies</MoveBut></NavLink>
    </nav>
  );
};


export default Header