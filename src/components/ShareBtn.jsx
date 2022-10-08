import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareBtn({ id, index, type, classBtn }) {
  const copyLink = () => {
    const auxType = type === 'meal' || type === 'meals' ? 'meals' : 'drinks';
    const url = `${window.location.protocol}//${window.location.host}/${auxType}/${id}`;
    copy(url);
    global.alert('Link copied!');
  };

  return (
    <button
      type="button"
      className={ `button-icon ${classBtn}` }
      onClick={ copyLink }
    >
      <img
        src={ shareIcon }
        alt="Share icon"
        data-testid={ typeof index === 'number'
          ? `${index}-horizontal-share-btn` : 'share-btn' }
      />
    </button>
  );
}

ShareBtn.propTypes = {
  index: PropTypes.number,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classBtn: PropTypes.string.isRequired,
};

ShareBtn.defaultProps = {
  index: null,
};

export default ShareBtn;
