import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    path: "/",
    text: "Books",
  },
  {
    id: 2,
    path: "/categories",
    text: "Categories",
  },
];
const Navbar = () => (
  <header>
    <nav className="navbar">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="unorderd-list">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className="link" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
