import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import BankCards from "./BankCards"; // Import the BankCards component

const creditCardData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Credit Needs',
    desc: `Before applying, consider why you need a credit card and how you will use it. Common reasons include:
    <ul>
      <li>Building credit history</li>
      <li>Earning rewards or cash back</li>
      <li>Financing large purchases</li>
      <li>Convenience for online shopping</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Check Your Credit Score',
    desc: `Your credit score plays a crucial role in credit card approval. You can check your credit score through:
    <ul>
      <li>Credit bureaus (e.g., Equifax, TransUnion)</li>
      <li>Online financial services</li>
      <li>Your bank or financial institution</li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Compare Credit Card Options',
    desc: `Research and compare different credit card options to find one that suits your needs. Consider factors such as:
    <ul>
      <li>Interest rates (APR)</li>
      <li>Annual fees</li>
      <li>Rewards programs</li>
      <li>Credit limit</li>
      <li>Additional benefits (e.g., travel insurance, purchase protection)</li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Gather Required Documents',
    desc: `To apply for a credit card, you will typically need to provide:
    <ul>
      <li>Proof of identity (e.g., passport, driver’s license)</li>
      <li>Proof of income (e.g., pay stubs, tax returns)</li>
      <li>Proof of residence (e.g., utility bill, lease agreement)</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Complete the Application Form',
    desc: `Fill out the credit card application form with accurate and up-to-date information. You can apply:
    <ul>
      <li>Online through the credit card issuer's website</li>
      <li>In person at a bank or financial institution</li>
      <li>By phone, if available</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Step 6: Submit Your Application',
    desc: `Submit your completed application form along with the required documents. Ensure all information is correct to avoid delays.`
  },
  {
    id: 7,
    title: 'Step 7: Wait for Approval',
    desc: `The approval process can take a few days to a few weeks, depending on the issuer. They will review your application and may contact you for additional information.`
  },
  {
    id: 8,
    title: 'Step 8: Receive and Activate Your Credit Card',
    desc: `Once approved, you will receive your credit card by mail. Follow the instructions to activate your card. You can usually activate it:
    <ul>
      <li>Online through the issuer's website</li>
      <li>By phone</li>
      <li>Through the issuer's mobile app</li>
    </ul>`
  },
  {
    id: 9,
    title: 'Additional Tips and Resources',
    desc: `Manage your credit card responsibly by:
    <ul>
      <li>Paying your balance in full each month to avoid interest charges</li>
      <li>Keeping your credit utilization ratio low</li>
      <li>Monitoring your credit card statements for unauthorized transactions</li>
    </ul>
    Resources:
    <ul>
      <li><a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-cards.html" target="_blank">Government of Canada: Credit Cards</a></li>
      <li><a href="https://www.canada.ca/en/services/finance/debt.html" target="_blank">Government of Canada: Managing Debt</a></li>
      <li><a href="https://www.fcac-acfc.gc.ca/Eng/resources/publications/creditLoans/Pages/CreditCardTDB-TDBCartesDeCredit.aspx" target="_blank">FCAC: Credit Card Comparison Tool</a></li>
    </ul>`
  }
];

const CreditCard = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to Get a Credit Card in Canada</h2>
        {creditCardData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Apply for a Credit Card at These Banks</h2>
          <BankCards /> {/* Use the BankCards component */}
        </div>

        <div className="general-resources">
          <h2>General Government Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/finance.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Finance
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Benefits and Services
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully obtain a credit card in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default CreditCard;
