import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import VolunteerPlatforms from "./VolunteerPlatforms"; // Import the VolunteerPlatforms component

const volunteerExperienceData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Interests and Skills',
    desc: `Before looking for volunteer opportunities, consider your interests and skills:
    <ul>
      <li>Areas of Interest: Healthcare, education, environment, social services, etc.</li>
      <li>Skills: Teaching, organizing events, providing care, etc.</li>
      <li>Availability: How much time you can commit?</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Research Online Platforms and Resources',
    desc: `There are several online platforms and resources where you can find volunteer opportunities:
    <ul>
      <li><a href="https://volunteer.ca" target="_blank">Volunteer Canada</a></li>
      <li><a href="https://charityvillage.com" target="_blank">CharityVillage</a></li>
      <li><a href="https://govolunteer.ca" target="_blank">GoVolunteer</a></li>
      <li><a href="https://www.volunteermatch.org" target="_blank">VolunteerMatch</a></li>
      <li><a href="https://volinspire.com" target="_blank">Volinspire</a></li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Check Local Organizations and Community Centers',
    desc: `Many local organizations and community centers offer volunteer opportunities:
    <ul>
      <li>Non-profit organizations</li>
      <li>Community centers</li>
      <li>Local charities</li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Attend Volunteer Fairs and Networking Events',
    desc: `Attend volunteer fairs and networking events to meet organizations and learn about opportunities:
    <ul>
      <li>Local volunteer fairs</li>
      <li>Community events</li>
      <li>Networking meetups</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Apply and Follow Up',
    desc: `Once you find suitable opportunities, apply and follow up with the organizations:
    <ul>
      <li>Prepare a resume highlighting your skills and experience</li>
      <li>Write a cover letter expressing your interest in volunteering</li>
      <li>Follow up with the organizations to confirm your application status</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you find volunteer opportunities in Canada:
    <ul>
      <li>Join local Facebook groups for volunteering</li>
      <li>Ask for recommendations from friends and family</li>
      <li>Use social media to find local events and opportunities</li>
    </ul>`
  }
];

const FindVolunteerExperience = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Finding Volunteer Experience in Canada</h2>
        {volunteerExperienceData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Find Volunteer Opportunities on These Platforms</h2>
          <VolunteerPlatforms /> {/* Use the VolunteerPlatforms component */}
        </div>

        <div className="general-resources">
          <h2>General Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/health.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Volunteer Services
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/public-health/services/health-promotion.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Health Promotion
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully find volunteer opportunities in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default FindVolunteerExperience;
