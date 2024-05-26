import React from 'react';
import './EnglishPlatforms.css';
import BackToTop from './BackToTop';

const englishPlatformsData = [
  {
    id: 1,
    name: 'Duolingo',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Duolingo_logo.png/800px-Duolingo_logo.png',
    link: 'https://www.duolingo.com'
  },
  {
    id: 2,
    name: 'ESL Courses',
    logo: 'https://www.eslcourses.com/images/esl-courses-logo.png',
    link: 'https://www.eslcourses.com'
  },
  {
    id: 3,
    name: 'British Council',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/British_Council_logo.svg/1200px-British_Council_logo.svg.png',
    link: 'https://www.britishcouncil.org'
  },
  {
    id: 4,
    name: 'Coursera',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Coursera_Logo.svg/1280px-Coursera_Logo.svg.png',
    link: 'https://www.coursera.org'
  },
  {
    id: 5,
    name: 'Udemy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Udemy_logo.svg/2560px-Udemy_logo.svg.png',
    link: 'https://www.udemy.com'
  }
];

const EnglishPlatforms = () => {
  return (
    <>
        <div className="english-platforms">
      {englishPlatformsData.map(platform => (
        <div key={platform.id} className="english-platform-card">
          {/* <img src={platform.logo} alt={`${platform.name} logo`} /> */}
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
    <BackToTop />
    </>

  );
};

export default EnglishPlatforms;
