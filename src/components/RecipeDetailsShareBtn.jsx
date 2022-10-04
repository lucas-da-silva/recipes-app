import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function RecipeDetailsShareBtn({ copyLinkShare }) {
  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        style={
          { bottom: '0px', zIndex: '9', margin: '20px 20px 40px', padding: '6px' }
        }
        onClick={ copyLinkShare }
      >
        <img
          style={ { zIndex: '12', width: '10px' } }
          src={ shareIcon }
          alt=""
        />
      </button>
    </div>
  );
}

RecipeDetailsShareBtn.propTypes = {
  copyLinkShare: PropTypes.func.isRequired,
};

export default RecipeDetailsShareBtn;
