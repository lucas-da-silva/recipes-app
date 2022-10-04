import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetailsCarousel({ recommendation, carouselKey, carouselObjKeys }) {
  const MAX_LENGTH = 6;
  return (
    <div className="recommendation-carousel">
      {
        recommendation[carouselKey]
          && (
            recommendation[carouselKey].map((item, index) => {
              if (index < MAX_LENGTH) {
                return (
                  <div
                    className="carousel-card"
                    data-testid={ `${index}-recommendation-card` }
                    key={ item[carouselObjKeys.name] }
                  >
                    <img
                      className="carousel-images"
                      src={ item[carouselObjKeys.img] }
                      alt=""
                    />
                    <h4
                      data-testid={ `${index}-recommendation-title` }
                    >
                      { item[carouselObjKeys.name] }
                    </h4>
                  </div>
                );
              }
              return undefined;
            }))
      }
    </div>
  );
}

RecipeDetailsCarousel.propTypes = {
  recommendation: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  carouselKey: PropTypes.string.isRequired,
  carouselObjKeys: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

RecipeDetailsCarousel.defaultProps = {
  carouselObjKeys: {
    img: '',
    name: '',
  },
};

export default RecipeDetailsCarousel;
