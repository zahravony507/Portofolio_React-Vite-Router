import React from 'react';
import './Skill.css';

const Skill = () => {
  const skills = [
    'HTML', 'Database', 'React nativ',
    'Css', 'Javascript', 'SEO',
    'Figma', 'PHP', 'Mysql'
  ];

  return (
    <div className="skill-container">
      <h1>My Skill</h1>
      <p className="skill-description">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </p>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skill;