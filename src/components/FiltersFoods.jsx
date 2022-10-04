import React from 'react';
import PropTypes from 'prop-types';
import allFiltersIcon from '../images/allFiltersIcon.svg';
import doneFoodsIcon from '../images/doneFoodsIcon.svg';
import doneDrinksIcon from '../images/doneDrinksIcon.svg';

function FiltersFoods({ filterFunction }) {
  return (
    <section className="filters">
      <button
        name="all"
        className="filter-food"
        data-testid="filter-by-all-btn"
        type="button"
        value="All"
        onClick={ ({ target: { name } }) => filterFunction(name) }
      >
        <img
          name="all"
          src={ allFiltersIcon }
          alt="All"
        />
      </button>
      <button
        name="meal"
        className="filter-food"
        data-testid="filter-by-meal-btn"
        value="meal"
        type="button"
        onClick={ ({ target: { name } }) => filterFunction(name) }
      >
        <img
          name="meal"
          src={ doneFoodsIcon }
          alt="Meal"
          value="Meal"
        />
      </button>
      <button
        name="drink"
        className="filter-food"
        data-testid="filter-by-drink-btn"
        value="drink"
        type="button"
        onClick={ ({ target: { name } }) => filterFunction(name) }
      >
        <img
          name="drink"
          src={ doneDrinksIcon }
          alt="Drink"
        />
      </button>
    </section>
  );
}

FiltersFoods.propTypes = {
  filterFunction: PropTypes.func.isRequired,
};

export default FiltersFoods;
