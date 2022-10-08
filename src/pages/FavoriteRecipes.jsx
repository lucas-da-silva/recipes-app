import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import FiltersFoods from '../components/FiltersFoods';
import FoodsContext from '../provider/FoodsContext';
import ShareBtn from '../components/ShareBtn';
import likedIcon from '../images/likedIcon.svg';
import favoriteLikeIcon from '../images/favoriteLikeIcon.svg';
import '../styles/FavoriteRecipes.css';
import Footer from '../components/Footer';

function FavoriteRecipes() {
  const {
    filteredFavoriteRecipes,
    favoriteRecipes,
    getFavoriteRecipes,
    setFavoriteRecipes,
  } = useContext(FoodsContext);
  useEffect(() => {
    getFavoriteRecipes();
  }, []);
  const handleClick = (id) => {
    const favoriteRecipesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavoriteRecipe = favoriteRecipesStorage.filter(
      (favoriteRecipe) => favoriteRecipe.id !== id,
    );
    localStorage.removeItem('favoriteRecipes');
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipe));
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  };
  const history = useHistory();
  return (
    <div>
      <Header title="Favorite Recipes" icon={ favoriteLikeIcon } />
      <FiltersFoods filterFunction={ filteredFavoriteRecipes } />
      <div className="cards-cotainer">
        { favoriteRecipes.map((recipe, index) => (
          <div className="horizontal-card" key={ index }>
            <button
              type="button"
              className="button-icon"
              onClick={ () => history.push(`/${recipe.type}s/${recipe.id}`) }
            >
              <img
                key={ index }
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
                className="horizontal-img-card"
              />
            </button>
            <div className="favorites-information-container recipe-information">
              <div className="favorites-name-container">
                <button
                  type="button"
                  className="button-icon"
                  onClick={ () => history.push(`/${recipe.type}s/${recipe.id}`) }
                >
                  <p className="food-name" data-testid={ `${index}-horizontal-name` }>
                    { recipe.name }
                  </p>
                </button>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                  className="food-type"
                >
                  { recipe.type === 'meal'
                    ? `${recipe.nationality} - ${recipe.category}`
                    : recipe.alcoholicOrNot}
                </p>
              </div>
              <ShareBtn
                type={ recipe.type }
                id={ recipe.id }
                index={ index }
                classBtn="share-btn"
              />
              <button
                type="button"
                className="button-icon favorite-btn"
                onClick={ () => handleClick(recipe.id) }
              >
                <img
                  src={ likedIcon }
                  alt="Heart icon"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FavoriteRecipes;
