import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';
import iconRecipe from '../images/iconRecipe.png';

function Login() {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const minLength = 6;
    const disabled = regex.test(login.email) && login.password.length > minLength;
    setIsDisabled(!disabled);
  }, [login]);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email: login.email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('drinksToken', 1);
    history.push('/meals');
  };

  return (
    <section className="login-container">
      <div className="login-title">
        <div className="login-logo-container">
          <img className="login-logo" src={ iconRecipe } alt="Logo" />
        </div>
        <div className="login-title-container">
          <p className="login-title-1">Yammly</p>
          <p className="login-title-2">recipes</p>
        </div>
      </div>
      <form className="login-form" onSubmit={ handleSubmit }>
        <h2 className="login-form-title">Login</h2>
        <input
          type="email"
          name="email"
          value={ login.email }
          data-testid="email-input"
          placeholder="Email"
          className="email-input"
          onChange={ handleChange }
        />
        <input
          type="password"
          name="password"
          value={ login.password }
          data-testid="password-input"
          placeholder="Password"
          className="password-input"
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
          className="login-submit-btn"
          id="login-button"
        >
          Enter
        </button>
      </form>
    </section>
  );
}

export default Login;
