import React from 'react';
import './Platforms.css';

const platformsData = [

    {
      id: 1,
      name: 'Roomies',
      logo: '',
      link: 'https://www.roomies.ca'
    },
    {
      id: 2,
      name: 'Roomster',
      logo: '',
      link: 'https://www.roomster.com'
    },
    {
      id: 3,
      name: 'EasyRoommate',
      logo: '',
      link: 'https://www.easyroommate.com'
    },
    {
      id: 4,
      name: 'Roomgo',
      logo: '',
      link: 'https://www.roomgo.co.uk'
    }
  ];

const Platforms = () => {
  return (
    <div className="platforms">
      {platformsData.map(platform => (
        <div key={platform.id} className="platform-card">
          <img src={platform.logo} alt={`${platform.name} logo`} />
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default Platforms;
