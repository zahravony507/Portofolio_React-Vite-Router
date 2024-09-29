import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import './Home.css';
import profileImage from '../momoka2.jpg'; // Jalur relatif yang benar

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="text-section">
          <p className="hello-text">Hello</p>
          <h1 className="name-text">I’m <span>Zahra Vonny</span></h1>
          <p className="role-text">Front-end Developer</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </div>
        </div>
        <div className="image-section">
          <img src={profileImage} alt="Zahra Vonny" className="profile-image" />
        </div>
      </div>
    );
  }
}

export default Home;
