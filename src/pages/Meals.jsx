import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import FoodsContext from '../provider/FoodsContext';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import '../styles/Foods.css';
import cowIcon from '../images/cowIcon.svg';
import chickenIcon from '../images/chickenIcon.svg';
import sheepIcon from '../images/sheepIcon.svg';
import breakfastIcon from '../images/breakfastIcon.svg';
import shortcakeIcon from '../images/shortcakeIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const MAX_LENGTH_CATEGORIES = 5;
const iconsCategories = [cowIcon, breakfastIcon, chickenIcon, shortcakeIcon, sheepIcon];

function Meals() {
  const {
    foods,
    site,
    setSite,
    setSiteKey,
    getFoods,
    getCategories,
    categories,
  } = useContext(FoodsContext);

  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const typeObj = {
    id: 'idMeal',
    str: 'strMeal',
    thumb: 'strMealThumb',
  };

  useEffect(() => {
    const api = 'themealdb';
    setSite(api);
    setSiteKey('meals');
    getFoods(url);
    getCategories(api);
  }, []);

  useEffect(() => {
    const checkFoods = () => {
      if (foods.meals === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
    };
    checkFoods();
  }, [foods]);

  const renderAllFitersBtn = () => (
    <div className="category-img-container">
      <img
        src={ mealIcon }
        alt="Meal icon"
      />
    </div>
  );

  return (
    <section>
      <Header icon={ mealIcon } title="Meals" iconSearch />
      <main className="foods-main-container">
        <div className="categories-container">
          <button
            className="category-btn button-icon"
            type="button"
            onClick={ () => getFoods(url) }
            data-testid="All-category-filter"
          >
            { renderAllFitersBtn() }
            <p>
              All
            </p>
          </button>
          {
            categories && categories.meals
            && categories.meals.map(({ strCategory }, index) => {
              if (index < MAX_LENGTH_CATEGORIES) {
                return (
                  <Categories
                    category={ strCategory }
                    key={ strCategory }
                    id={ strCategory }
                    icon={ iconsCategories[index] }
                    site={ site }
                  />
                );
              }
              return undefined;
            })
          }
        </div>
        <div className="foods-main-div">
          {
            foods.meals && foods.meals.length
              && <Recipes foods={ foods.meals } type={ typeObj } />
          }
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Meals;
