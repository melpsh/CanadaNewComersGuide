import React from "react";
import InfoBlock from "./InfoBlock";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


const IDCard = () => {
  return(
    <NavLink to='IDCard'>
      <InfoBlock className="card" title="How to apply for Canadian ID" />
      <div>
      Step 1: Determine Eligibility
Before applying for a Canadian ID card, ensure that you are eligible. Typically, you are eligible if you:

Are a permanent resident of Canada.
Have reached the age of majority in your province or territory.
Do not possess a driver's license.
Step 2: Gather Required Documents
Ensure you have the following documents ready:

Proof of Identity: Such as a valid foreign passport or birth certificate.
Proof of Residency: A document showing your current Canadian address, such as a utility bill or rental agreement.
Proof of Immigration Status: This could be your Permanent Resident Card (PR card) or other relevant immigration documents.
Additional Identification: Some provinces may require additional identification, so it's wise to check with your local government office.
Step 3: Fill Out the Application Form
Visit the website of the government agency responsible for issuing ID cards in your province or territory. Find and download the application form for a Canadian ID card. Fill it out completely and accurately.

Step 4: Prepare Your Photograph
You'll need to provide a recent passport-sized photograph with your application. Ensure it meets the specifications outlined by the issuing authority, such as size, background color, and resolution.

Step 5: Submit Your Application
Once you have completed the application form and gathered all necessary documents, submit them to the appropriate government office. This could be a Service Canada office, a provincial government office, or another designated agency.

Step 6: Pay the Application Fee
There may be a fee associated with obtaining a Canadian ID card. Make sure to include the required payment with your application. Payment methods vary by province or territory, so check the instructions provided by the issuing authority.

Step 7: Await Processing
After submitting your application, it will be processed by the relevant government department. Processing times may vary depending on your location and the volume of applications received.

Step 8: Receive Your Canadian ID Card
Once your application has been processed and approved, you will receive your Canadian ID card by mail at the address you provided. Make sure to review the card for accuracy and keep it in a safe place.

Additional Tips:
Check Processing Times: Be aware of the estimated processing times for ID card applications in your area to manage your expectations.
Keep Copies: Make copies of all documents submitted with your application for your records.
Update Information: If any of your information changes (e.g., address), notify the issuing authority promptly to update your ID card.
Helpful Links:
Government of Canada - Identification (ID) cards: Provides general information on Canadian ID cards for newcomers.
Service Canada: Official website for government services, including ID card applications.
[Province/Territory Specific Websites]: Each province or territory may have its own website with detailed information on ID card applications and requirements. Check the relevant website for your location.
By following these steps and utilizing the provided resources, you can successfully apply for a Canadian ID card as a newcomer to Canada.
      </div>
    </NavLink>
  )
};

export default IDCard;