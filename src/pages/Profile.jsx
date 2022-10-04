import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import yellowProfileIcon from '../images/yellowProfileIcon.svg';
import iconDone from '../images/iconDone.svg';
import yellowHeartIcon from '../images/yellowHeartIcon.svg';
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
      <h2 data-testid="profile-email">
        User :
        {userEmail !== null ? userEmail.email : 'User'}
      </h2>
      <div className="user-links">
        <button
          className="links"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          <img src={ iconDone } alt="" />
        </button>
        <button
          className="links"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          <img src={ yellowHeartIcon } alt="" />
        </button>
        <button
          className="links"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          <img src={ logoutIcon } alt="" />
        </button>
      </div>
    </div>
  );
}

export default Profile;
