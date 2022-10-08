import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeInProgress from './pages/RecipeInProgress';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Profile from './pages/Profile';

function Routes() {
  const mealsObj = {
    img: 'strMealThumb',
    name: 'strMeal',
  };

  const drinksObj = {
    img: 'strDrinkThumb',
    name: 'strDrink',
  };

  return (
    <Switch>
      <Route
        exact
        path="/project-recipes-app/meals/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        exact
        path="/project-recipes-app/drinks/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        exact
        path="/project-recipes-app/meals/:id"
        render={
          (props) => (
            <RecipeDetails
              { ...props }
              site="themealdb"
              siteKey="meals"
              typeKeysObj={ mealsObj }
              carouselKey="drinks"
              carouselObjKeys={ drinksObj }
            />)
        }
      />
      <Route
        exact
        path="/project-recipes-app/drinks/:id"
        render={
          (props) => (
            <RecipeDetails
              { ...props }
              site="thecocktaildb"
              siteKey="drinks"
              typeKeysObj={ drinksObj }
              carouselKey="meals"
              carouselObjKeys={ mealsObj }
            />)
        }
      />
      <Route
        exact
        path="/project-recipes-app/favorite-recipes"
        component={ FavoriteRecipes }
      />
      <Route exact path="/project-recipes-app/done-recipes" component={ DoneRecipes } />
      <Route exact path="/project-recipes-app/drinks" component={ Drinks } />
      <Route exact path="/project-recipes-app/profile" component={ Profile } />
      <Route exact path="/project-recipes-app/meals" component={ Meals } />
      <Route exact path="/project-recipes-app" component={ Login } />
    </Switch>
  );
}

export default Routes;
