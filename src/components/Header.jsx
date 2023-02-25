import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';
import iconRecipe from '../images/iconRecipe.png';

function Header({ title, iconSearch, icon }) {
  const history = useHistory();
  const [showInput, setShowInput] = useState(false);

  const classIcon = title.toLowerCase();

  return (
    <section className="header-container">
      <section className="header-nav-container">
        <div className="title-nav-container">
          <div>
            <img className="header-icon-recipe" src={ iconRecipe } alt="icon recipe" />
          </div>
          <div className="title-nav-text-container">
            <p className="nav-title-first">YAMMLY</p>
            <p className="nav-title-second">recipes</p>
          </div>
        </div>
        <div className="icons-nav-container">
          {
            iconSearch
        && (
          <button
            className="button-icon search-top-btn"
            type="button"
            onClick={ () => setShowInput(!showInput) }
          >
            <img
              className="search-icon"
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Search icon"
            />
          </button>
        )
          }
          <button
            className="button-icon profile-top-btn"
            type="button"
            onClick={ () => history.push('/recipes-app/profile') }
          >
            <img
              className="search-icon"
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="Profile icon"
            />
          </button>
        </div>
      </section>
      <div className="header-title-container">
        <div
          id="icon-container"
          className={ `header-icon-container header-icon-${classIcon}-container` }
        >
          <img
            id="icon-id"
            className={ `header-icon-${classIcon}` }
            src={ icon }
            alt={ title }
          />
        </div>
        <h2 className="page-title" data-testid="page-title">{title}</h2>
      </div>
      {
        showInput
        && <SearchBar />
      }
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  iconSearch: PropTypes.bool,
  icon: PropTypes.string.isRequired,
};

Header.defaultProps = {
  iconSearch: false,
};

export default Header;
