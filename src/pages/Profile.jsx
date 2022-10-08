import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import yellowProfileIcon from '../images/yellowProfileIcon.svg';
import profileDoneIcon from '../images/profileDoneIcon.svg';
import profileHeartIcon from '../images/profileHeartIcon.svg';
import logoutIcon from '../images/logoutIcon.svg';
import '../styles/Profile.css';

function Profile() {
  const history = useHistory();
  const userEmail = JSON.parse(localStorage.getItem('user'));
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div className="page">
      <section>
        <Header title="Profile" icon={ yellowProfileIcon } />
        <Footer />
      </section>
      <h3 className="profile-email" data-testid="profile-email">
        {userEmail !== null ? userEmail.email : 'User'}
      </h3>
      <div className="user-links">
        <button
          className="links button-icon"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          <img src={ profileDoneIcon } alt="Done recipes icon" />
          <p>Done Recipes</p>
        </button>
        <hr className="profile-hr" />
        <button
          className="links button-icon"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          <img src={ profileHeartIcon } alt="Favorite recipes icon" />
          <p>Favorite Recipes</p>
        </button>
        <hr className="profile-hr" />
        <button
          className="links button-icon"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          <img src={ logoutIcon } alt="Logout icon" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}

export default Profile;
