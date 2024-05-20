import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import Accordion from "./Accordion"; // Import the Accordion component

const data =[
  {
    id: 1,
    title: 'Step 1: Determine Eligibility',
    desc: `Before applying, make sure you meet the basic eligibility requirements. Generally, you must be:
    <ul>
      <li>A resident of the province or territory.</li>
      <li>Legally entitled to reside in Canada.</li>
    </ul>`
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
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Research Provincial/Territorial Requirement',
    desc: `Each province and territory in Canada has its own process and specific requirements for issuing ID cards. Here are links to the ID card information for each province and territory:
    <ul>
      <li>Ontario: <a href="https://www.ontario.ca/page/ontario-photo-card" target="_blank">Ontario Photo Card</a></li>
      <li>British Columbia: <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/id-services" target="_blank">BC Services Card</a></li>
      <li>Alberta: <a href="https://www.alberta.ca/get-id-card.aspx" target="_blank">Alberta ID Card</a></li>
      <li>Quebec: <a href="https://www.quebec.ca/en/health/health-issues/a-z/health-insurance-card" target="_blank">Health Insurance Card (also used as ID)</a></li>
      <li>Other provinces and territories: Visit their respective government websites.</li>
    </ul>`
  },
  // Add other steps in the same way
];

const IDCard = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to Get a Provincial or Territorial ID Card in Canada</h2>
        {data.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
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
              <a href="https://www.quebec.ca/en/health/health-issues/a-z/health-insurance-card" target="_blank" rel="noopener noreferrer">
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
