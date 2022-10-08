import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import notLikedIcon from '../images/notLikedIcon.svg';
import likedIcon from '../images/likedIcon.svg';
import handleStorage from '../services/handleStorage';

function FavoriteBtn(
  { id, type, nationality, category, alcoholicOrNot, name, image },
) {
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    const favoriteRecipesStorage = handleStorage('favoriteRecipes');
    if (favoriteRecipesStorage) {
      const isFavoriteRecipe = favoriteRecipesStorage.some((recipe) => recipe.id === id);
      setIsFavorite(isFavoriteRecipe);
    } else {
      handleStorage('favoriteRecipes', []);
    }
  }, []);

  const handleClick = () => {
    const favoriteRecipesStorage = handleStorage('favoriteRecipes');
    if (isFavorite) {
      const newFavoriteRecipes = favoriteRecipesStorage.filter(
        (recipe) => recipe.id !== id,
      );
      handleStorage('favoriteRecipes', newFavoriteRecipes);
      setIsFavorite(false);
    } else {
      const newFavoriteRecipe = {
        alcoholicOrNot,
        category,
        id,
        image,
        name,
        nationality,
        type: type === 'meals' ? 'meal' : 'drink',
      };
      const newFavoriteRecipesStorage = [
        ...favoriteRecipesStorage,
        newFavoriteRecipe,
      ];
      handleStorage('favoriteRecipes', newFavoriteRecipesStorage);
      setIsFavorite(true);
    }
  };

  return (
    <button
      type="button"
      className="favorite-btn-detail button-icon"
      onClick={ handleClick }
    >
      <img
        src={ isFavorite ? likedIcon : notLikedIcon }
        data-testid="favorite-btn"
        alt="Heart icon"
      />
    </button>
  );
}

FavoriteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nationality: PropTypes.string,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

FavoriteBtn.defaultProps = {
  alcoholicOrNot: '',
  nationality: '',
};

export default FavoriteBtn;
