import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ShareBtn from './ShareBtn';
import '../styles/DoneRecipeCard.css';

function DoneRecipeCard(
  { id, image, nationality, category, name, doneDate,
    tags, index, alcoholicOrNot, type },
) {
  const history = useHistory();

  const auxType = type === 'meal' ? 'meals' : 'drinks';

  return (
    <div className="done-recipe-card">
      <div>
        <button
          type="button"
          className="button-icon"
          onClick={ () => history.push(`/${auxType}/${id}`) }
        >
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
            className="done-recipe-img-card"
          />
        </button>
      </div>
      <div className="recipe-information">
        <p
          className="food-type"
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${alcoholicOrNot.length ? alcoholicOrNot : nationality} - ${category}`}
        </p>
        <button
          type="button"
          onClick={ () => history.push(`/${auxType}/${id}`) }
          className="button-icon"
        >
          <p className="food-name" data-testid={ `${index}-horizontal-name` }>{ name }</p>
        </button>
        <p
          className="recipe-date"
          data-testid={ `${index}-horizontal-done-date` }
        >
          { doneDate }
        </p>
        {
          tags.length && tags.map((tag) => (
            <p
              key={ tag }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          ))
        }
        <ShareBtn
          type={ type }
          id={ id }
          index={ index }
          classBtn="share-btn"
        />
      </div>
    </div>
  );
}

DoneRecipeCard.propTypes = {
  image: PropTypes.string,
  nationality: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  doneDate: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
  alcoholicOrNot: PropTypes.string,
}.isRequired;

export default DoneRecipeCard;
