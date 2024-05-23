import React from 'react';
import './TaxPlatforms.css';

const taxPlatformsData = [
  {
    id: 1,
    name: 'TurboTax',
    logo: "https://images.ctfassets.net/6zivncwxby0i/3sHEySEScXG9miXxyY2DCI/70e91c6160dc7c60f2d8c01d4840502d/turbotax_logo_no_intuit.svg",
    link: 'https://turbotax.intuit.ca'
  },
  {
    id: 2,
    name: 'H&R Block',
    logo: '',
    link: 'https://www.hrblock.ca'
  },
  {
    id: 3,
    name: 'Wealthsimple Tax',
    logo: '',
    link: 'https://www.wealthsimple.com/en-ca/tax'
  },
  {
    id: 4,
    name: 'SimpleTax',
    logo: 'https://www.wealthsimple.com/static/ws-wordmark-refresh-aefa986e4074a84f853576304d0c9763.svg',
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
