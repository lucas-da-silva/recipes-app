import React from 'react';
import { useHistory } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../styles/Footer.css';

function Footer() {
  const history = useHistory();
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
          src={ drinkIcon }
          alt="drinks"
          className="drinks-bottom-btn"
          data-testid="drinks-bottom-btn"
        />
      </button>
      <button
        type="button"
        className="button-icon"
        onClick={ () => history.push('/meals') }
      >
        <img
          src={ mealIcon }
          alt="meals"
          className="meals-bottom-btn"
          data-testid="meals-bottom-btn"
        />
      </button>
    </div>
  );
}

export default Footer;
