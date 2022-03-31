import React from "react";
import { NavLink } from "react-router-dom";
import user from "../images/user.png";
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
      <img className="user" src={user} />
    </nav>
    <div className="line" />
  </header>
);

export default Navbar;
