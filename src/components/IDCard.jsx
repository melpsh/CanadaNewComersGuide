import React from "react";
import Layout from "./Layout";

const IDCard = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Apply for Canadian ID Card</h1>
        <div className="card p-4">
          <h2>Step 1: Determine Eligibility</h2>
          <p>
            Before applying for a Canadian ID card, ensure that you are eligible. Typically, you are eligible if you:
          </p>
          <ul>
            <li>Are a permanent resident of Canada.</li>
            <li>Have reached the age of majority in your province or territory.</li>
            <li>Do not possess a driver's license.</li>
          </ul>
          {/* Repeat the same pattern for each step */}
          <h2 className="mt-4">Step 2: Gather Required Documents</h2>
          <p>
            Ensure you have the following documents ready:
          </p>
          <ul>
            <li>Proof of Identity: Such as a valid foreign passport or birth certificate.</li>
            <li>Proof of Residency: A document showing your current Canadian address, such as a utility bill or rental agreement.</li>
            <li>Proof of Immigration Status: This could be your Permanent Resident Card (PR card) or other relevant immigration documents.</li>
            <li>Additional Identification: Some provinces may require additional identification, so it's wise to check with your local government office.</li>
          </ul>
          {/* Repeat the same pattern for each step */}
          {/* Add more steps as necessary */}
        </div>
      </div>
    </Layout>
  );
};

export default IDCard;
