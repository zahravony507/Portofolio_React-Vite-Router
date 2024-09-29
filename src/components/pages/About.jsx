import React from 'react';
import './About.css';
import profileImage from '../momoka2.jpg'; // Pastikan path ini benar

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="info-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <div className="personal-info">
            <InfoItem label="Name" value="Zahra Vonny" />
            <InfoItem label="Date of birth" value="January 21, 1996" />
            <InfoItem label="Address" value="Center Jakarta" />
            <InfoItem label="Zip code" value="121212" />
            <InfoItem label="Email" value="zahravony338@gmail.com" />
            <InfoItem label="Phone" value="+628218000764" />
            <InfoItem label="Linked" value="zahravonny" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <span className="info-label">{label}:</span>
    <span className="info-value">{value}</span>
  </div>
);

export default About;