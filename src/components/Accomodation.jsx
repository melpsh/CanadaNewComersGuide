import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import Platforms from "./RoommatePlatforms"; // Import the Platforms component
import AccomodationPlatforms from "./AccomodationPlatforms";

const accommodationData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Budget and Preferences',
    desc: `Before looking for accommodation, consider your budget and preferences:
    <ul>
      <li>Budget: How much can you afford to pay for rent and utilities?</li>
      <li>Location: Where do you want to live? Proximity to work or school?</li>
      <li>Type of accommodation: Apartment, house, shared living, etc.</li>
      <li>Duration: Short-term or long-term lease?</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Research Neighborhoods',
    desc: `Research different neighborhoods to find the best fit for your lifestyle. Consider:
    <ul>
      <li>Safety and security</li>
      <li>Accessibility to public transportation</li>
      <li>Proximity to amenities such as grocery stores, parks, and schools</li>
      <li>Community vibe and atmosphere</li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Use Online Platforms to Find Accommodation',
    desc: `There are several online platforms where you can search for accommodation:
    <ul>
      <li><a href="https://www.kijiji.ca" target="_blank">Kijiji</a></li>
      <li><a href="https://www.craigslist.org" target="_blank">Craigslist</a></li>
      <li><a href="https://www.airbnb.ca" target="_blank">Airbnb</a></li>
      <li><a href="https://www.padmapper.com" target="_blank">PadMapper</a></li>
      <li><a href="https://www.viewit.ca" target="_blank">Viewit</a></li>
      <li><a href="https://rentals.ca" target="_blank">Rentals.ca</a></li>
      <li><a href="https://www.realtor.ca" target="_blank">Realtor.ca</a></li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Visit Potential Rentals',
    desc: `Schedule visits to potential rentals to see them in person. During visits:
    <ul>
      <li>Inspect the condition of the property</li>
      <li>Ask questions about utilities, maintenance, and neighborhood</li>
      <li>Meet potential landlords or property managers</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Review and Sign the Lease Agreement',
    desc: `Once you find a suitable accommodation, review the lease agreement carefully:
    <ul>
      <li>Ensure all terms and conditions are clear and fair</li>
      <li>Check the duration of the lease and renewal options</li>
      <li>Understand the payment terms and due dates</li>
      <li>Sign the lease agreement and keep a copy for your records</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you find accommodation in Canada:
    <ul>
      <li>Join local Facebook groups for housing and rentals</li>
      <li>Use university or college housing services if you are a student</li>
      <li>Consult newcomers' services for assistance and guidance</li>
    </ul>`
  }
];

const Accommodation = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to Find Accommodation in Canada</h2>
        {accommodationData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Find Accommodation on These Platforms</h2>
          <AccomodationPlatforms /> 
        </div>

        <div className="general-resources">
          <h2>General Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/immigration-citizenship.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Immigration and Citizenship
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/services/newcomers.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Services for Newcomers
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully find accommodation in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Accommodation;
