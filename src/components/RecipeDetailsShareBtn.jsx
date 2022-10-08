import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function RecipeDetailsShareBtn({ copyLinkShare }) {
  return (
    <button
      type="button"
      data-testid="share-btn"
      className="button-icon share-btn-detail"
      onClick={ copyLinkShare }
    >
      <img
        src={ shareIcon }
        alt="Share Icon"
      />
    </button>
  );
}

RecipeDetailsShareBtn.propTypes = {
  copyLinkShare: PropTypes.func.isRequired,
};

export default RecipeDetailsShareBtn;
