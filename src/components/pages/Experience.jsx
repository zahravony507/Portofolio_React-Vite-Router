import React from 'react';
import './Experience.css';

const ExperienceItem = ({ company, position, period, description }) => (
  <div className="experience-item">
    <h2>{company}</h2>
    <h3>{position}</h3>
    <p className="period">{period}</p>
    <p>{description}</p>
  </div>
);

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>My Experience</h1>
      <ExperienceItem 
        company="PT. Lorem Ipsum"
        position="Front End Developer"
        period="Jan 2020 - Sep 2023"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <ExperienceItem 
       company="PT. Lorem Ipsum"
        position="Front End Developer"
        period="Jan 2020 - Sep 2023"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default Experience;
