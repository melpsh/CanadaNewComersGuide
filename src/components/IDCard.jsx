import React from "react";
import Layout from "./Layout";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const data =[
  {
      id:1,
      title:'Step 1: Determine Eligibility',
      desc: `Before applying, make sure you meet the basic eligibility requirements. Generally, you must be:       A resident of the province or territory.
      Legally entitled to reside in Canada.`
  },
  {
      id:2,
      title:'Step 2: Gather Required Documents',
      desc: `You'll need to present various documents to prove your identity, residency, and legal status in Canada. These documents typically include:

      Proof of Identity (one or more of the following):
      Passport
      Birth certificate
      Permanent resident card

      Proof of Residency (one or more of the following):
      Utility bill
      Rental agreement or lease
      Bank statement

      Proof of Legal Status:
      Visa
      Work permit
      Study permit
      Permanent resident card`
  },
  {
      id:3,
      title:'Step 3: Research Provincial/Territorial Requirement',
      desc: `Each province and territory in Canada has its own process and specific requirements for issuing ID cards. Here are links to the ID card information for each province and territory:

      Ontario: Ontario Photo Card
      British Columbia: BC Services Card
      Alberta: Alberta ID Card
      Quebec: Health Insurance Card (also used as ID)
      Other provinces and territories: Visit their respective government websites.`
  },
  {
      id:4,
      title:'Step 4: Visit a Service Location',
      desc: `Go to a service location such as a ServiceOntario center, ICBC office, Alberta Registry Agent, or SAAQ office. Some provinces/territories might also offer online applications for certain parts of the process. Check if an appointment is necessary.`
  },
  {
      id:5,
      title:'Step 5: Complete the Application',
      desc: `At the service center, you will need to:

      Fill out an application form (available at the service center or online on the provincial/territorial website).
      Provide the required documents.
      Answer any questions from the staff to verify your identity and residency.`
  },
  {
      id:6,
      title:'Step 6: Pay the Fees',
      desc: `There are fees associated with obtaining a provincial or territorial ID card. The fees vary by province/territory and can range from $20 to $40. Ensure you have the means to pay these fees (cash, debit, or credit card).`
  },
  {
      id:7,
      title:'Step 7: Get Your Photo Taken',
      desc: `The service center will take your photo for the ID card. Make sure to follow any guidelines regarding appearance (e.g., no hats or sunglasses).`
  },
  {
      id:8,
      title:'Step 8: Receive Your ID',
      desc: `Temporary ID: In some provinces/territories, you may receive a temporary paper ID card that you can use until your permanent card arrives.
      Permanent ID: Your permanent ID card will typically be mailed to you within a few weeks.`
  }
]

const IDCard = () => {
  return (
    <Layout>
        <Accordion data={data} />
        <div>
          <br />
        <h6>
        Additional Resources
          </h6>
          <p>
          Here are some resources for specific provinces and territories:
          </p>

          <div>
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
        <p>To find a Service Canada office near you, you can use the Service Canada website's office locator tool. This tool allows you to search for offices by entering your address or postal code. Here is the link to the Service Canada office locator tool:</p>
        <li>
          <a href="https://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng" target="_blank" rel="noopener noreferrer">
            Service Canada Locations
          </a>
        </li>
      </ul>
    </div>

 
<h6>
General Government Resources
</h6>

Government of Canada: Identification Requirements: Get Proof of Identity
Service Canada: Service Canada Locations
By following these steps and utilizing the provided resources, newcomers to Canada can successfully obtain a provincial or territorial ID card. Be sure to verify the specific requirements and procedures for your particular province or territory.
        </div>
      
    </Layout>
  );
};

export default IDCard;
