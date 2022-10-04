import React from 'react';
import PropTypes from 'prop-types';
import RecipePhoto from './RecipePhoto';
import RecipeTitle from './RecipeTitle';
import ShareBtn from './ShareBtn';
import RecipeCategory from './RecipeCategory';
import Instructions from './Instructions';
import FinishRecipeBtn from './FinishRecipeBtn';
import FavoriteBtn from './FavoriteBtn';
import IngredientsStep from './IngredientsStep';
import handleStorage from '../services/handleStorage';
import RecipeDetailsVideo from './RecipeDetailsVideo';

function RecipeInProgressCard(
  { type, image, name, id, category, instructions, ingredients,
    alcoholicOrNot, nationality, tags, video },
) {
  const getData = () => {
    const data = new Date();
    return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
  };

  const setDoneRecipe = () => {
    const doneRecipe = {
      id,
      nationality: nationality || '',
      category,
      alcoholicOrNot: alcoholicOrNot || '',
      name,
      image,
      doneDate: getData(),
      tags: tags ? tags.split(',') : [],
      type: type === 'meals' ? 'meal' : 'drink',
    };
    const doneRecipesStorage = handleStorage('doneRecipes');
    if (doneRecipesStorage) {
      const doneRecipes = [...doneRecipesStorage, doneRecipe];
      handleStorage('doneRecipes', doneRecipes);
    } else {
      handleStorage('doneRecipes', [doneRecipe]);
    }
  };

  console.log(video);

  return (
    <section>
      <div>
        <RecipePhoto src={ image } alt={ name } />
        <RecipeCategory category={ category } />
        <RecipeTitle title={ name } />
        <ShareBtn classBtn="share-btn-detail" id={ id } type={ type } />
        <FavoriteBtn
          id={ id }
          classBtn="favorite-in-progress-btn"
          category={ category }
          name={ name }
          alcoholicOrNot={ alcoholicOrNot }
          nationality={ nationality }
          image={ image }
          type={ type }
        />
      </div>
      <div className="content-in-progress-container">
        <IngredientsStep type={ type } id={ id } ingredients={ ingredients } />
        <Instructions instructions={ instructions } />
        <FinishRecipeBtn setDoneRecipe={ setDoneRecipe } />
        <RecipeDetailsVideo siteKey={ type } src={ video } />
      </div>
    </section>
  );
}

RecipeInProgressCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
  instructions: PropTypes.string,
  type: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.object),
  alcoholicOrNot: PropTypes.string,
  nationality: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  video: PropTypes.string,
}.isRequired;

export default RecipeInProgressCard;
