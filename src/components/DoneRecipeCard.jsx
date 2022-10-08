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
  const nameFood = (
    <p
      className="food-name"
      data-testid={ `${index}-horizontal-name` }
    >
      { name }
    </p>);

  const tagsFood = () => {
    if (tags.length) {
      return (
        <div className="tags-container">
          {tags.map((tag, indexTag) => (
            <p
              key={ indexTag }
              className="food-tag"
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="horizontal-card">
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
            className="horizontal-img-card"
          />
        </button>
      </div>
      <div className="recipe-information">
        <div className="name-share-cotainer">
          <div className="name-container">
            <button
              type="button"
              onClick={ () => history.push(`/${auxType}/${id}`) }
              className="button-icon"
            >
              { nameFood }
            </button>
            <p
              className="food-type"
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${alcoholicOrNot.length ? alcoholicOrNot : nationality} - ${category}`}
            </p>
          </div>
          <ShareBtn
            type={ type }
            id={ id }
            index={ index }
            classBtn="done-share-btn"
          />
        </div>
        <p
          className="food-date"
          data-testid={ `${index}-horizontal-done-date` }
        >
          { `Done in: ${doneDate}` }
        </p>
        <div className="tags-container">
          { tagsFood() }
        </div>
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
