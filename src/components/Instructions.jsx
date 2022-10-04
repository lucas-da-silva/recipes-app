import React from 'react';
import PropTypes from 'prop-types';

function Instructions({ instructions }) {
  return (
    <div className="recipe-instructions">
      <h3 className="title-recipe-topic">Instructions</h3>
      <div className="recipe-container">
        <p
          data-testid="instructions"
          className="recipe-instructions-text"
        >
          { instructions }
        </p>
      </div>
    </div>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
