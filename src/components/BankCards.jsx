import React from 'react';
import './BankCards.css';

const banksData = [
  {
    id: 1,
    name: 'RBC',
    logo: 'https://cdn.phenompeople.com/CareerConnectResources/RBCAA0088/en_ca/desktop/assets/images/v-1700254955431-RBC-careers-logo.svg',
    link: 'https://www.rbc.com/personal.html'
  },
  {
    id: 2,
    name: 'TD',
    logo: 'https://www.td.com/content/dam/wealth/images/direct-investing/td-logo-en.png',
    link: 'https://www.td.com/ca/en/personal-banking/'
  },
  {
    id: 3,
    name: 'Scotiabank',
    logo: 'https://www.scotiabank.com/content/dam/scotiabank/images/logos/2019/scotiabank-logo-red-desktop-200px.svg',
    link: 'https://www.scotiabank.com/ca/en/personal.html'
  },
  {
    id: 4,
    name: 'BMO',
    logo: 'https://www.bmo.com/dist/images/logos/bmo-blue-on-transparent-en.svg',
    link: 'https://www.bmo.com/main/personal'
  },
  {
    id: 5,
    name: 'CIBC',
    logo: 'https://www.cibc.com/content/dam/global-assets/logos/cibc-logos/no-tagline/cibc-logo-colour-142x36.svg',
    link: 'https://www.cibc.com/en/personal-banking.html'
  },
  {
    id: 6,
    name: 'National Bank',
    logo: 'https://www.nbc.ca/content/dam/bnc/commun/logo/logo-nbc-155x50.svg',
    link: 'https://www.nbc.ca/personal.html'
  }
];

const BankCards = () => {
  return (
    <div className="bank-cards">
      {banksData.map(bank => (
        <div key={bank.id} className="bank-card">
          <img src={bank.logo} alt={`${bank.name} logo`} />
          <h3>{bank.name}</h3>
          <a href={bank.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      ))}
    </div>
  );
};

export default BankCards;
