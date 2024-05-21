import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import DoctorPlatforms from "./DoctorPlatforms"; // Import the DoctorPlatforms component

const familyDoctorData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Needs and Preferences',
    desc: `Before looking for a family doctor, consider your needs and preferences:
    <ul>
      <li>Location: Proximity to your home or workplace.</li>
      <li>Language: Preferred language of communication.</li>
      <li>Special Requirements: Any specific health needs or conditions.</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Research Online Platforms and Resources',
    desc: `There are several online platforms and resources where you can find family doctors:
    <ul>
      <li><a href="https://www.healthcareconnect.gov.on.ca" target="_blank">Healthcare Connect (Ontario)</a></li>
      <li><a href="https://medimap.ca" target="_blank">Medimap</a></li>
      <li><a href="https://www.cpsbc.ca" target="_blank">College of Physicians and Surgeons of BC</a></li>
      <li><a href="https://www.quebec.ca/en/health/finding-a-resource/registering-with-a-family-doctor" target="_blank">Québec Family Doctor Finder</a></li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Check Local Health Resources',
    desc: `Many local health resources and organizations can help you find a family doctor:
    <ul>
      <li>Local health units and clinics</li>
      <li>Community health centers</li>
      <li>Hospitals</li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Ask for Recommendations',
    desc: `Ask for recommendations from people you know:
    <ul>
      <li>Friends and family</li>
      <li>Colleagues and neighbors</li>
      <li>Other healthcare providers</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Contact Potential Doctors',
    desc: `Once you have a list of potential doctors, contact them to inquire about:
    <ul>
      <li>Availability</li>
      <li>Office hours</li>
      <li>Services provided</li>
      <li>New patient registration process</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Step 6: Register and Schedule Your First Appointment',
    desc: `Register with the doctor you have chosen and schedule your first appointment:
    <ul>
      <li>Provide necessary medical history and information</li>
      <li>Ask any initial questions you may have</li>
      <li>Ensure you understand the doctor's policies and procedures</li>
    </ul>`
  },
  {
    id: 7,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you find a family doctor in Canada:
    <ul>
      <li>Check provincial or territorial health websites for specific programs</li>
      <li>Utilize walk-in clinics if immediate care is needed</li>
      <li>Consider telehealth services for remote consultations</li>
    </ul>`
  }
];

const FindFamilyDoctor = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Finding a Family Doctor in Canada</h2>
        {familyDoctorData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Find Family Doctors on These Platforms</h2>
          <DoctorPlatforms /> {/* Use the DoctorPlatforms component */}
        </div>

        <div className="general-resources">
          <h2>General Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/health.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Health Services
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/public-health/services/health-promotion.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Health Promotion
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully find a family doctor in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default FindFamilyDoctor;
