import React, { useState, useContext } from 'react';
import FoodsContext from '../provider/FoodsContext';
import '../styles/SearchBar.css';

function SearchBar() {
  const [filterSearch, setFilterSearch] = useState({
    value: '',
    filter: '',
  });
  const { getFoods, site } = useContext(FoodsContext);

  const handleChange = ({ target: { name, value } }) => {
    setFilterSearch({
      ...filterSearch,
      [name]: value,
    });
  };

  const getUrl = (typeSearch, typeValue, value) => `https://www.${site}.com/api/json/v1/1/${typeSearch}.php?${typeValue}=${value}`;

  const getFirstLetter = (value) => {
    if (value.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      getFoods(getUrl('search', 'f', filterSearch.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (filterSearch.filter) {
    case 'Ingredient':
      getFoods(getUrl('filter', 'i', filterSearch.value));
      break;
    case 'Name':
      getFoods(getUrl('search', 's', filterSearch.value));
      break;
    case 'First letter':
      getFirstLetter(filterSearch.value);
      break;
    default: global.alert('Fill in the fields');
    }
  };

  return (
    <form className="search-bar-form" onSubmit={ handleSubmit }>
      <div className="search-bar-container">
        <input
          type="text"
          name="value"
          data-testid="search-input"
          onChange={ handleChange }
          className="search-input"
          value={ filterSearch.value }
          placeholder="Search"
        />
        <div className="search-radio-buttons">
          <label className="search-label" htmlFor="ingredient-search-radio">
            <input
              type="radio"
              name="filter"
              onChange={ handleChange }
              value="Ingredient"
              data-testid="ingredient-search-radio"
              id="ingredient-search-radio"
            />
            Ingredient
          </label>
          <label className="search-label" htmlFor="name-search-radio">
            <input
              type="radio"
              name="filter"
              value="Name"
              onChange={ handleChange }
              data-testid="name-search-radio"
              id="name-search-radio"
            />
            Name
          </label>
          <label className="search-label" htmlFor="first-letter-search-radio">
            <input
              type="radio"
              name="filter"
              value="First letter"
              onChange={ handleChange }
              data-testid="first-letter-search-radio"
              id="first-letter-search-radio"
            />
            First letter
          </label>
        </div>
        <button
          type="submit"
          data-testid="exec-search-btn"
          className="exec-search-btn"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
