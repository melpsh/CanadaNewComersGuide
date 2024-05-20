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
  <ul>
    <li>
    <span>British Columbia: </span> <Link>BC Services Card </Link>
    </li>
    <li>
    <span>Ontario: </span> <Link>Ontario Photo Card </Link>
    </li>
    <li>
    <span>Alberta:</span> <Link>Alberta ID Card </Link>
    </li>
    <li>
    <span>Quebec: </span> <Link>Health Insurance Card (used as ID) </Link>
    </li>
    <li>
    <span>Nova Scotia: </span> <Link> Nova Scotia ID Card</Link>
    </li>
    <li>
    <span>Manitoba: </span> <Link>Manitoba ID Card </Link>
    </li>
    <li>
    <span>Newfoundland and Labrador: </span> <Link>NL ID Card </Link>
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
