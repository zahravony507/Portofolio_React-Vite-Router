import React from 'react';
import './Award.css';

const AwardItem = ({ period, title, company, description }) => (
  <div className="award-item">
    <h3>{period}</h3>
    <h4>{title}</h4>
    <p className="company">{company}</p>
    <p>{description}</p>
  </div>
);

const Award = () => {
  const awards = [
    {
      period: "may - july 2023",
      title: "UI-UX research and design: fullstack intensive bootcamp",
      company: "PT Linimuda Inspirasi Negeri (MYSKILL)",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      period: "September 2022",
      title: "Google analytics for beginners",
      company: "Google Analytics Academy",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      period: "May - July 2024",
      title: "Mobile app development with react native",
      company: "Digital Talent Scholarship",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      period: "Febuary 2023",
      title: "Make a responsive portfolio website: javascript and html",
      company: "Udemy",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      period: "juli - september 2022",
      title: "Database design and programming with sql",
      company: "Digital Talent Scholarship",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      period: "May 2024",
      title: "DevSecOps: Implementing Security in DevOps Processes",
      company: "eccouncil",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    // Duplikat objek di atas 5 kali untuk membuat total 6 item
    // ...
  ];

  return (
    <div className="award-container">
      <h1>My Award</h1>
      <div className="award-grid">
        {awards.map((award, index) => (
          <AwardItem key={index} {...award} />
        ))}
      </div>
    </div>
  );
};

export default Award;