import React from 'react';
import './Interest.css';

const InterestItem = ({ title, description }) => (
  <div className="interest-item">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Interest = () => {
  const interests = [
    {
      title: "Content creator",
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "UI & UX Website Designer",
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Music",
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Photographer",
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Coding",
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Content writer",
      description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  return (
    <div className="interest-container">
      <h1>My Interest</h1>
      <div className="interest-grid">
        {interests.map((interest, index) => (
          <InterestItem key={index} {...interest} />
        ))}
      </div>
    </div>
  );
};

export default Interest;