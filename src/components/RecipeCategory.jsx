import React from 'react';
import PropTypes from 'prop-types';

function RecipeCategory({ category }) {
  return (
    <div className="category-recipe">
      <h4
        data-testid="recipe-category"
      >
        {category}
      </h4>
    </div>
  );
}

RecipeCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default RecipeCategory;
