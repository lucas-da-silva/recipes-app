import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import FoodsContext from '../provider/FoodsContext';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';
import drinkIcon from '../images/drinkIcon.svg';
import drinkWineIcon from '../images/drinkWineIcon.svg';
import cocktailIcon from '../images/cocktailIcon.svg';
import shakeIcon from '../images/shakeIcon.svg';
import beerIcon from '../images/beerIcon.svg';
import coffeeIcon from '../images/coffeeIcon.svg';

const MAX_LENGTH_CATEGORIES = 5;
const iconsCategories = [drinkWineIcon, cocktailIcon, shakeIcon, beerIcon, coffeeIcon];

function Drinks() {
  const {
    foods,
    site,
    setSite,
    setSiteKey,
    getFoods,
    getCategories,
    categories,
    setPage,
  } = useContext(FoodsContext);

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const typeObj = {
    id: 'idDrink',
    str: 'strDrink',
    thumb: 'strDrinkThumb',
  };

  useEffect(() => {
    const api = 'thecocktaildb';
    setSite(api);
    setSiteKey('drinks');
    getFoods(url);
    getCategories(api);
    setPage('drinks');
  }, []);

  useEffect(() => {
    const checkFoods = () => {
      if (foods.drinks === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
    };
    checkFoods();
  }, [foods]);

  const renderAllFitersBtn = () => (
    <div className="category-img-container">
      <img
        src={ drinkIcon }
        alt="Drink icon"
      />
    </div>
  );

  return (
    <section>
      <Header icon={ drinkIcon } title="Drinks" iconSearch />
      <main className="foods-main-container">
        <div className="categories-container">
          <button
            className="category-btn button-icon"
            type="button"
            onClick={ () => getFoods(url) }
            data-testid="All-category-filter"
          >
            { renderAllFitersBtn() }
            <p>All</p>
          </button>
          {
            categories && categories.drinks
            && categories.drinks.map(({ strCategory }, index) => {
              if (index < MAX_LENGTH_CATEGORIES) {
                return (
                  <Categories
                    category={ strCategory }
                    key={ strCategory }
                    icon={ iconsCategories[index] }
                    id={ strCategory }
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
            foods.drinks && foods.drinks.length
              && <Recipes foods={ foods.drinks } type={ typeObj } />
          }
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Drinks;
