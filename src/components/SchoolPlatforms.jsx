import React from 'react';
import './SchoolPlatforms.css';

const schoolPlatformsData = [
  {
    id: 1,
    name: 'GreatSchools',
    logo: 'https://www.greatschools.org/gk/wp-content/uploads/2016/09/GreatSchools_logo.png',
    link: 'https://www.greatschools.org/canada/'
  },
  {
    id: 2,
    name: 'Our Kids',
    logo: 'https://www.ourkids.net/images/logo_ourkids.svg',
    link: 'https://www.ourkids.net/school/school-search.php'
  },
  {
    id: 3,
    name: 'SchoolFinder',
    logo: 'https://www.schoolfinder.com/images/schoolfinder/schoolfinder_logo.png',
    link: 'https://www.schoolfinder.com/'
  },
  {
    id: 4,
    name: 'Fraser Institute School Rankings',
    logo: 'https://www.fraserinstitute.org/sites/default/files/fi-logo_2.png',
    link: 'https://www.compare-school-rankings.org/'
  }
];

const SchoolPlatforms = () => {
  return (
    <div className="school-platforms">
      {schoolPlatformsData.map(platform => (
        <div key={platform.id} className="school-platform-card">
          <img src={platform.logo} alt={`${platform.name} logo`} />
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default SchoolPlatforms;
