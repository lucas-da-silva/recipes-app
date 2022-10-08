import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetailsVideo({ siteKey, src }) {
  return src
    ? (
      <div className="recipe-video">
        <h3 className="title-recipe-topic">Video</h3>
        {
          siteKey === 'meals'
        && (
          <iframe
            className="video"
            data-testid="video"
            src={ src.replace('watch?v=', 'embed/') }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
        }
      </div>
    ) : null;
}

RecipeDetailsVideo.propTypes = {
  siteKey: PropTypes.string.isRequired,
  src: PropTypes.string,
};

RecipeDetailsVideo.defaultProps = {
  src: '',
};

export default RecipeDetailsVideo;
