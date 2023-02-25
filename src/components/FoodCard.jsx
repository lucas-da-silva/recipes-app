import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../styles/FoodsCards.css';
import { useHistory } from 'react-router-dom';
import FoodsContext from '../provider/FoodsContext';

const MAX_LENGTH_NAME = 20;

function FoodCards({ id, name, img, index }) {
  const history = useHistory();
  const { siteKey } = useContext(FoodsContext);
  if (name.length > MAX_LENGTH_NAME) {
    name = `${name.slice(0, MAX_LENGTH_NAME)}...`;
  }
  return (
    <button
      type="button"
      className="card-container"
      key={ id }
      data-testid={ `${index}-recipe-card` }
      onClick={ () => history.push(`/recipes-app/${siteKey}/${id}`) }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ img }
        className="card-img"
        alt={ name }
      />
      <p
        className="card-name"
        data-testid={ `${index}-card-name` }
        href={ `/${siteKey}/${id}` }
      >
        {name}
      </p>
    </button>
  );
}

FoodCards.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FoodCards;
