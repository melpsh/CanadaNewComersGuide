import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle, faClipboardList, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';


const data = [
  {
    id: 1,
    title: 'Step 1: Determine Eligibility',
    desc: `Before applying, make sure you meet the basic eligibility requirements. Generally, you must be:
    <ul>
      <li>A resident of the province or territory.</li>
      <li>Legally entitled to reside in Canada.</li>
    </ul>`,
    icon: faCheckCircle
  },
  {
    id: 2,
    title: 'Step 2: Gather Required Documents',
    desc: `You'll need to present various documents to prove your identity, residency, and legal status in Canada. These documents typically include:
    <ul>
      <li>Proof of Identity (one or more of the following):
        <ul>
          <li>Passport</li>
          <li>Birth certificate</li>
          <li>Permanent resident card</li>
        </ul>
      </li>
      <li>Proof of Residency (one or more of the following):
        <ul>
          <li>Utility bill</li>
          <li>Rental agreement or lease</li>
          <li>Bank statement</li>
        </ul>
      </li>
      <li>Proof of Legal Status:
        <ul>
          <li>Visa</li>
          <li>Work permit</li>
          <li>Study permit</li>
          <li>Permanent resident card</li>
        </ul>
      </li>
    </ul>`,
    icon: faClipboardList
  },
  {
    id: 3,
    title: 'Step 3: Find Application Locations',
    desc: `Identify where you can apply for an ID card in your province or territory. This can typically be done at Service Canada locations, provincial/territorial government service centers, or online:
    <ul>
      <li>Service Canada Locations: <a href="https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng" target="_blank">Find a location</a></li>
      <li>Provincial/Territorial Government Offices: Check the official government website for your region.</li>
      <li>Online Applications: Some regions allow online applications. Check your provincial or territorial government website for more information.</li>
    </ul>`,
    icon: faMapMarkerAlt
  },
  {
    id: 4,
    title: 'Step 4: Submit Your Application',
    desc: `Once you've gathered all required documents and identified the correct application location, you can submit your application. The process typically involves:
    <ul>
      <li>Completing an application form (available online or at the service center).</li>
      <li>Paying the application fee (varies by region).</li>
      <li>Providing the required documents for verification.</li>
      <li>Getting your photo taken (if required).</li>
    </ul>
    Make sure to double-check the specific requirements for your province or territory.`,
    icon: faClipboardList
  },
  {
    id: 5,
    title: 'Step 5: Receive Your ID Card',
    desc: `After submitting your application, you will need to wait for your ID card to be processed and mailed to you. Processing times vary by region but generally take a few weeks. In some cases, you might receive a temporary ID card or receipt immediately, which you can use until your official card arrives.`,
    icon: faCheckCircle
  },
  {
    id: 6,
    title: 'Step 6: Verify Your ID Card',
    desc: `Once you receive your ID card, check all the information to ensure it's correct. If there are any errors, contact the issuing authority immediately to have them corrected. Carry your ID card with you as proof of identity and residency.`,
    icon: faCheckCircle
  },
];

const IDCard = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to Get a Provincial or Territorial ID Card in Canada</h2>
        {data.map(step => (
          <div key={step.id} className="step">
            <h3>
              <FontAwesomeIcon icon={step.icon} /> {step.title}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Additional Resources</h2>
          <ul>
            <li>
              <a href="https://www.ontario.ca/page/ontario-photo-card" target="_blank" rel="noopener noreferrer">
                Ontario Photo Card
              </a>
            </li>
            <li>
              <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/id-services" target="_blank" rel="noopener noreferrer">
                BC Services Card
              </a>
            </li>
            <li>
              <a href="https://www.alberta.ca/get-id-card.aspx" target="_blank" rel="noopener noreferrer">
                Alberta ID Card
              </a>
            </li>
            <li>
              <a href="https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/register" target="_blank" rel="noopener noreferrer">
                Quebec Health Insurance Card (used as ID)
              </a>
            </li>
            <li>
              <a href="https://novascotia.ca/sns/paal/rmv/paal275.asp" target="_blank" rel="noopener noreferrer">
                Nova Scotia ID Card
              </a>
            </li>
            <li>
              <a href="https://www.mpi.mb.ca/how-to-apply-for-an-identification-card/" target="_blank" rel="noopener noreferrer">
                Manitoba ID Card
              </a>
            </li>
            <li>
              <a href="https://www.gov.nl.ca/motorregistration/new-drivers/photo-identification-card/" target="_blank" rel="noopener noreferrer">
                Newfoundland and Labrador ID Card
              </a>
            </li>
            <li>
              <a href="https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng" target="_blank" rel="noopener noreferrer">
                Service Canada Locations
              </a>
            </li>
          </ul>
        </div>

        <div className="general-resources">
          <h2>General Government Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/employment-social-development/services/sin.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Identification Requirements: Get Proof of Identity
              </a>
            </li>
            <li>
              <a href="https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng" target="_blank" rel="noopener noreferrer">
                Service Canada: Service Canada Locations
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, newcomers to Canada can successfully obtain a provincial or territorial ID card. Be sure to verify the specific requirements and procedures for your particular province or territory.</p>
        </div>
      </div>
    </Layout>
  );
};

export default IDCard;
