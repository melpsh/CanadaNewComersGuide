import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import Platforms from "./RoommatePlatforms"; // Import the Platforms component
import RoommatePlatforms from "./RoommatePlatforms";

const roommateData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Needs and Preferences',
    desc: `Before looking for a roommate, consider your needs and preferences:
    <ul>
      <li>Budget: How much can you afford to pay for rent and utilities?</li>
      <li>Location: Where do you want to live?</li>
      <li>Lifestyle: Do you prefer a quiet or social living environment?</li>
      <li>House Rules: Are there any specific rules you want to establish?</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Prepare a Roommate Agreement',
    desc: `A roommate agreement helps set expectations and avoid conflicts. Include details such as:
    <ul>
      <li>Rent and utility payments</li>
      <li>Cleaning and chores</li>
      <li>Guest policies</li>
      <li>Shared expenses</li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Use Online Platforms to Find a Roommate',
    desc: `There are several online platforms where you can search for roommates:
    <ul>
      <li><a href="https://www.kijiji.ca" target="_blank">Kijiji</a></li>
      <li><a href="https://www.craigslist.org" target="_blank">Craigslist</a></li>
      <li><a href="https://www.facebook.com/marketplace" target="_blank">Facebook Marketplace</a></li>
      <li><a href="https://www.roomies.ca" target="_blank">Roomies</a></li>
      <li><a href="https://www.padmapper.com" target="_blank">PadMapper</a></li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Screen Potential Roommates',
    desc: `It's important to screen potential roommates to ensure a good fit. Consider:
    <ul>
      <li>Meeting in person or via video call</li>
      <li>Discussing lifestyle and habits</li>
      <li>Checking references</li>
      <li>Discussing the roommate agreement</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Finalize Arrangements',
    desc: `Once you've found a suitable roommate, finalize the arrangements:
    <ul>
      <li>Sign the roommate agreement</li>
      <li>Agree on a move-in date</li>
      <li>Coordinate logistics for moving</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you find a roommate in Canada:
    <ul>
      <li>Join local Facebook groups for housing and roommates</li>
      <li>Attend housing fairs and networking events</li>
      <li>Use university or college housing services if you are a student</li>
    </ul>`
  }
];

const Roommate = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to Find a Roommate in Canada</h2>
        {roommateData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Find Roommates on These Platforms</h2>
          <RoommatePlatforms /> 
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
          <p>By following these steps and utilizing the provided resources, you can successfully find a roommate in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Roommate;
