import React from 'react';
import './Platforms.css';
import BackToTop from './BackToTop';

const platformsData = [
  {
    id: 1,
    name: 'Kijiji',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Kijiji_Logo.svg/1200px-Kijiji_Logo.svg.png',
    link: 'https://www.kijiji.ca'
  },
  {
    id: 2,
    name: 'Craigslist',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Craigslist.svg/1200px-Craigslist.svg.png',
    link: 'https://www.craigslist.org'
  },
  {
    id: 3,
    name: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/800px-Airbnb_Logo_Bélo.svg.png',
    link: 'https://www.airbnb.ca'
  },
  {
    id: 4,
    name: 'PadMapper',
    logo: 'https://assets.padmapper.com/assets/padmapper_logo.svg',
    link: 'https://www.padmapper.com'
  },
  {
    id: 5,
    name: 'Viewit',
    logo: 'https://www.viewit.ca/images/viewit-logo.png',
    link: 'https://www.viewit.ca'
  },
  {
    id: 6,
    name: 'Rentals.ca',
    logo: 'https://rentals.ca/public/logos/rentals-logo.png',
    link: 'https://rentals.ca'
  },
  {
    id: 7,
    name: 'Realtor.ca',
    logo: 'https://static.realtor.ca/branding/crea_real/logo/realtor-logo-light.png',
    link: 'https://www.realtor.ca'
  }
];

const AccomodationPlatforms = () => {
  return (
    <div className="platforms">
      {platformsData.map(platform => (
        <div key={platform.id} className="platform-card">
          {/* <img src={platform.logo} alt={`${platform.name} logo`} /> */}
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
      <BackToTop />
    </div>
  );
};

export default AccomodationPlatforms;
