import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FoodsContext from '../provider/FoodsContext';

function Categories({ category, id, site, icon }) {
  const { fetchCategory, getFoods } = useContext(FoodsContext);
  const [selected, setSelect] = useState(false);

  const handleClick = () => {
    if (!selected) {
      fetchCategory(site, category);
    } else {
      getFoods(`https://www.${site}.com/api/json/v1/1/search.php?s=`);
    }
    setSelect(!selected);
  };

  return (
    <div className="category-btn-container">
      <button
        id={ id }
        type="button"
        className="category-btn button-icon"
        onClick={ handleClick }
        data-testid={ `${category}-category-filter` }
      >
        <div className="category-img-container">
          <img
            src={ icon }
            alt={ category }
          />
        </div>
        <p>
          { category }
        </p>
      </button>
    </div>
  );
}

Categories.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Categories;
