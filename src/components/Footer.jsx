import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FoodsContext from '../provider/FoodsContext';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../styles/Footer.css';
import likedIcon from '../images/likedIcon.svg';
import selectedDrinks from '../images/selectedDrinks.svg';
import selectedMeals from '../images/selectedMeals.svg';
import selectedDone from '../images/selectedDone.svg';
import selectedFavorites from '../images/selectedFavorites.svg';
import profileDoneIcon from '../images/profileDoneIcon.svg';

function Footer() {
  const history = useHistory();
  const { page } = useContext(FoodsContext);

  const getIcon = (icon) => (icon === page);

  return (
    <div
      className="footer-container"
      data-testid="footer"
    >
      <button
        type="button"
        className="button-icon"
        onClick={ () => history.push('/drinks') }
      >
        <img
          src={ getIcon('drinks') ? selectedDrinks : drinkIcon }
          alt="drinks"
          className="footer-icon drinks-bottom-btn"
          data-testid="drinks-bottom-btn"
        />
        <p className="footer-btn-text">Drinks</p>
      </button>
      <button
        type="button"
        className="button-icon"
        onClick={ () => history.push('/meals') }
      >
        <img
          src={ getIcon('meals') ? selectedMeals : mealIcon }
          alt="meals"
          className="footer-icon meals-bottom-btn"
          data-testid="meals-bottom-btn"
        />
        <p className="footer-btn-text">Meals</p>
      </button>
      <button
        type="button"
        className="button-icon"
        onClick={ () => history.push('/favorite-recipes') }
      >
        <img
          className="footer-icon favorite-bottom-btn"
          src={ getIcon('favorites') ? selectedFavorites : likedIcon }
          alt="Favorites foods"
        />
        <p className="footer-btn-text">Favorites</p>
      </button>
      <button
        type="button"
        className="button-icon"
        onClick={ () => history.push('/done-recipes') }
      >
        <img
          className="footer-icon done-bottom-btn"
          src={ getIcon('done') ? selectedDone : profileDoneIcon }
          alt="Done recipes"
        />
        <p className="footer-btn-text">Done</p>
      </button>
    </div>
  );
}

export default Footer;
