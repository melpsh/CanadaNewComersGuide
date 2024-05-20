import React from "react";
import Layout from "./Layout";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const IDCard = () => {
  return (
    <Layout>


        <Accordion />
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
