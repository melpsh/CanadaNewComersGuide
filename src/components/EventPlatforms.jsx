import React from 'react';
import './EventPlatforms.css';

const eventPlatformsData = [
  {
    id: 1,
    name: 'Meetup',
    logo: 'https://secure.meetupstatic.com/photos/event/1/c/e/highres_478221022.jpeg',
    link: 'https://www.meetup.com'
  },
  {
    id: 2,
    name: 'Eventbrite',
    logo: 'https://cdn.worldvectorlogo.com/logos/eventbrite-1.svg',
    link: 'https://www.eventbrite.ca'
  },
  {
    id: 3,
    name: 'Facebook Events',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png',
    link: 'https://www.facebook.com/events/'
  },
  {
    id: 4,
    name: 'Eventful',
    logo: 'https://eventful.com/images/eventful-logo.svg',
    link: 'https://www.eventful.com'
  },
  {
    id: 5,
    name: 'Ticketmaster',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ticketmaster_logo.svg/1280px-Ticketmaster_logo.svg.png',
    link: 'https://www.ticketmaster.ca'
  }
];

const EventPlatforms = () => {
  return (
    <div className="event-platforms">
      {eventPlatformsData.map(platform => (
        <div key={platform.id} className="event-platform-card">
          {/* <img src={platform.logo} alt={`${platform.name} logo`} /> */}
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default EventPlatforms;
