import React from 'react';
import PropTypes from 'prop-types';
import yellowShareIcon from '../images/yellowShareIcon.svg';

function RecipeDetailsShareBtn({ copyLinkShare }) {
  return (
    <button
      type="button"
      data-testid="share-btn"
      onClick={ copyLinkShare }
      className="button-icon share-btn-detail"
    >
      <img
        src={ yellowShareIcon }
        alt="Share Icon"
      />
    </button>
  );
}

RecipeDetailsShareBtn.propTypes = {
  copyLinkShare: PropTypes.func.isRequired,
};

export default RecipeDetailsShareBtn;
