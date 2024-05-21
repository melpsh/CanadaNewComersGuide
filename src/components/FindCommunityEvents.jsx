import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import EventPlatforms from "./EventPlatforms"; // Import the EventPlatforms component

const communityEventsData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Interests and Preferences',
    desc: `Before looking for community events, consider your interests and preferences:
    <ul>
      <li>Types of Events: Cultural, sports, educational, social, etc.</li>
      <li>Frequency: Weekly, monthly, annual events.</li>
      <li>Location: Proximity to your home or workplace.</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Research Online Platforms and Resources',
    desc: `There are several online platforms and resources where you can find community events:
    <ul>
      <li><a href="https://www.meetup.com" target="_blank">Meetup</a></li>
      <li><a href="https://www.eventbrite.ca" target="_blank">Eventbrite</a></li>
      <li><a href="https://www.facebook.com/events/" target="_blank">Facebook Events</a></li>
      <li><a href="https://www.eventful.com" target="_blank">Eventful</a></li>
      <li><a href="https://www.ticketmaster.ca" target="_blank">Ticketmaster</a></li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Check Local Community Boards and Centers',
    desc: `Many local community boards and centers have information on events:
    <ul>
      <li>Community centers</li>
      <li>Local libraries</li>
      <li>Community bulletin boards</li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Join Local Groups and Organizations',
    desc: `Joining local groups and organizations can help you stay informed about events:
    <ul>
      <li>Sports leagues and clubs</li>
      <li>Cultural organizations</li>
      <li>Volunteer groups</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Use Social Media and Local Websites',
    desc: `Follow local social media pages and websites to stay updated on community events:
    <ul>
      <li>Local Facebook groups</li>
      <li>Instagram pages for local events</li>
      <li>Local news websites</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you find community events in Canada:
    <ul>
      <li>Subscribe to newsletters from local organizations</li>
      <li>Check local government websites for event calendars</li>
      <li>Ask friends and family for recommendations</li>
    </ul>`
  }
];

const FindCommunityEvents = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Finding Community and Events in Canada</h2>
        {communityEventsData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Find Community Events on These Platforms</h2>
          <EventPlatforms /> {/* Use the EventPlatforms component */}
        </div>

        <div className="general-resources">
          <h2>General Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/health.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Community Services
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/public-health/services/health-promotion.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Health Promotion
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully find community events in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default FindCommunityEvents;
