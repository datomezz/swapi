import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Header = ({navList}) => {
  return (
    <header className="swapi-header">
      <nav className="swapi-navbar">
        <h3 className="swapi-navbar__title">
          <NavLink to={"/"}>SWAPI</NavLink>
        </h3>
        <ul className="swapi-navbar__list">
          {
            navList.map(({id, label, title}, idx) => {
              return (
                <li className="swapi-navbar__list__item" key={id}>
                  <NavLink to={`/${label}`}>{title}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

const mapStateToProps = ({navList}) => {
  return {navList}
}

export default connect(mapStateToProps, null)(Header);
