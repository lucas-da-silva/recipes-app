import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import ShareBtn from '../components/ShareBtn';
import RecipeDetailsCarousel from '../components/RecipeDetailsCarousel';
import RecipeDetailsVideo from '../components/RecipeDetailsVideo';
import FavoriteBtn from '../components/FavoriteBtn';
import '../styles/RecipesDetails.css';

function RecipeDetails({ site, siteKey, typeKeysObj, carouselKey, carouselObjKeys }) {
  const [recipeDetails, setRecipeDetails] = useState();
  const [recommendation, setRecommendation] = useState({ [carouselKey]: [] });
  const [ingredientsValues, setIngredientsValues] = useState([]);
  const history = useHistory();

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { drinks: {}, meals: {} };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'))
    || [{ id: '' }];

  const { id } = useParams();
  useEffect(() => {
    const url = (`https://www.${site}.com/api/json/v1/1/lookup.php?i=${id}`);
    fetchApi(url).then((result) => setRecipeDetails(result[siteKey][0]));

    if (siteKey === 'meals') {
      fetchApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((response) => setRecommendation(response));
    } else if (siteKey === 'drinks') {
      fetchApi('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((response) => setRecommendation(response));
    }
  }, []);

  useEffect(() => {
    if (recipeDetails) {
      const ingredientsFiltered = Object.entries(recipeDetails)
        .filter((detail) => detail[0].includes('Ingredient')
          && detail[1] !== ''
          && detail[1] !== null);
      const measuresFilter = Object.entries(recipeDetails)
        .filter((detail) => detail[0].includes('Measure')
          && detail[1] !== ' '
          && detail[1] !== null);
      const measuresValues = measuresFilter.map((measure) => measure[1]);
      const ingredientsAndMeasures = [];
      ingredientsFiltered.forEach((ingredient, i) => {
        ingredientsAndMeasures.push(`${measuresValues[i]} ${ingredient[1]}`);
      });
      setIngredientsValues(ingredientsAndMeasures);
    }
  }, [recipeDetails]);

  const handleClick = () => {
    history.push(`${id}/in-progress`);
  };

  return (
    recipeDetails !== undefined
    && (
      <div>
        <img
          data-testid="recipe-photo"
          src={ recipeDetails[typeKeysObj.img] }
          alt="Recipe"
          className="recipe-photo"
        />
        <div className="category-recipe">
          {
            siteKey === 'drinks'
              ? <h4 data-testid="recipe-category">Alcoholic</h4>
              : <h4 data-testid="recipe-category">{ recipeDetails.strCategory }</h4>
          }
        </div>
        <ShareBtn classBtn="share-btn-detail" id={ id } type={ siteKey } />
        <h1
          data-testid="recipe-title"
          className="recipe-title"
        >
          { recipeDetails[typeKeysObj.name] }
        </h1>
        <div className="recipe-ingredient">
          <h3 className="title-recipe-topic">Ingredients</h3>
          <ul className="recipe-container">
            { ingredientsValues.map((ingredient, index) => (
              <li
                key={ ingredient }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {ingredient}
              </li>
            )) }
          </ul>
        </div>
        <div className="recipe-instructions">
          <h3 className="title-recipe-topic">Instructions</h3>
          <div className="recipe-container">
            <p
              data-testid="instructions"
              className="recipe-instructions-text"
            >
              { recipeDetails.strInstructions }
            </p>
          </div>
        </div>
        <FavoriteBtn
          id={ id }
          category={ recipeDetails.strCategory }
          name={ recipeDetails[typeKeysObj.name] }
          alcoholicOrNot={ recipeDetails.strAlcoholic }
          nationality={ recipeDetails.strArea }
          image={ recipeDetails[typeKeysObj.img] }
          type={ siteKey }
        />
        <RecipeDetailsVideo siteKey={ siteKey } src={ recipeDetails.strYoutube } />
        {
          recommendation !== undefined
            && (
              <div className="recipe-recommendations">
                <h3 className="title-recipe-topic">
                  Recommendations
                </h3>
                <div
                  className="recommendation-carousel"
                >
                  <RecipeDetailsCarousel
                    recommendation={ recommendation }
                    carouselKey={ carouselKey }
                    carouselObjKeys={ carouselObjKeys }
                  />
                </div>
              </div>
            )
        }
        {
          doneRecipes.every((recipe) => recipe.id !== id)
          && (
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="recipe-btn"
              onClick={ handleClick }
            >
              {
                Object.keys(inProgressRecipes[siteKey]).some((key) => key === id)
                  ? 'Continue Recipe'
                  : 'Start Recipe'
              }
            </button>
          )
        }
      </div>
    )
  );
}

RecipeDetails.propTypes = {
  site: PropTypes.string.isRequired,
  siteKey: PropTypes.string.isRequired,
  carouselKey: PropTypes.string.isRequired,
  typeKeysObj: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  carouselObjKeys: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
