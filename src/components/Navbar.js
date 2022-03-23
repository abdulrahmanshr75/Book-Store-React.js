import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Books',
  },
  {
    id: 2,
    path: '/categories',
    text: 'Categories',
  },
];
const Navbar = () => (
  <nav className="navbar">
    <ul className="unorderd-list">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
