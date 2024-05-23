import React from 'react';
import './Platforms.css';

const platformsData = [

    {
      id: 1,
      name: 'Roomies',
      logo: "../assets/images/roomiesLogo.png",
      link: 'https://www.roomies.ca'
    },
    {
      id: 2,
      name: 'Roomster',
      logo: "https://cdn-assets.roomster.com/dist/c3d24db2087ace7a94b0c05f59503bd3.svg",
      link: 'https://www.roomster.com'
    },
    {
      id: 3,
      name: 'EasyRoommate',
      logo: "https://easyroommate.com/media/easyroommate.com-logo-x1-280x25.png",
      link: 'https://www.easyroommate.com'
    },
    {
      id: 4,
      name: 'Roomgo',
      logo: "https://static.erm-assets.com/r3-0-1-976/assets/img/UK/r_logo.png",
      link: 'https://www.roomgo.co.uk'
    }
  ];

const RoommatePlatforms = () => {
  return (
    <div className="platforms">
      {platformsData.map(platform => (
        <div key={platform.id} className="platform-card">
          {/* <img src={platform.logo} alt={`${platform.name} logo`} /> */}
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default RoommatePlatforms;
