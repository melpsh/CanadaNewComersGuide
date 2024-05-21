import React from 'react';
import './TaxPlatforms.css';

const taxPlatformsData = [
  {
    id: 1,
    name: 'TurboTax',
    logo: 'https://turbotax.intuit.ca/sites/default/files/styles/thumbnail/public/2020-08/turbotax-logo-2018.png',
    link: 'https://turbotax.intuit.ca'
  },
  {
    id: 2,
    name: 'H&R Block',
    logo: 'https://www.hrblock.ca/wp-content/uploads/2021/01/HRB_Logo_EN_4C_CMYK-300x191.jpg',
    link: 'https://www.hrblock.ca'
  },
  {
    id: 3,
    name: 'Wealthsimple Tax',
    logo: 'https://cdn.wealthsimple.com/assets/logos/wealthsimple/tax-logo-horizontal.png',
    link: 'https://www.wealthsimple.com/en-ca/tax'
  },
  {
    id: 4,
    name: 'SimpleTax',
    logo: 'https://www.simpletax.ca/assets/images/logos/SimpleTax_logo.svg',
    link: 'https://www.simpletax.ca'
  }
];

const TaxPlatforms = () => {
  return (
    <div className="tax-platforms">
      {taxPlatformsData.map(platform => (
        <div key={platform.id} className="tax-platform-card">
          <img src={platform.logo} alt={`${platform.name} logo`} />
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default TaxPlatforms;
