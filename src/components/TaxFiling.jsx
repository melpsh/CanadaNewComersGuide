import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import TaxPlatforms from "./TaxPlatforms"; // Import the TaxPlatforms component

const taxFilingData = [
  {
    id: 1,
    title: 'Step 1: Gather Your Documents',
    desc: `Before filing your taxes, gather all necessary documents:
    <ul>
      <li>T4 slips (employment income)</li>
      <li>T4A slips (self-employment, pension, etc.)</li>
      <li>Receipts for deductions and credits (medical expenses, charitable donations, etc.)</li>
      <li>Previous year’s Notice of Assessment (NOA)</li>
      <li>Investment income statements (T5, T3, etc.)</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Choose a Filing Method',
    desc: `Decide how you want to file your taxes:
    <ul>
      <li>Online using certified software (NETFILE)</li>
      <li>On paper (mailing your return)</li>
      <li>Through a tax professional or accountant</li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Use Online Tax Software',
    desc: `There are several online platforms where you can file your taxes:
    <ul>
      <li><a href="https://turbotax.intuit.ca" target="_blank">TurboTax</a></li>
      <li><a href="https://www.hrblock.ca" target="_blank">H&R Block</a></li>
      <li><a href="https://www.wealthsimple.com/en-ca/tax" target="_blank">Wealthsimple Tax</a></li>
      <li><a href="https://www.simpletax.ca" target="_blank">SimpleTax</a></li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Complete Your Tax Return',
    desc: `Complete your tax return by entering all required information:
    <ul>
      <li>Income details from T4, T4A, T5, etc.</li>
      <li>Deductions and credits (RRSP contributions, tuition fees, etc.)</li>
      <li>Review and double-check all entries for accuracy</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Submit Your Tax Return',
    desc: `Submit your tax return using your chosen method:
    <ul>
      <li>Online via NETFILE</li>
      <li>Mailing a paper return to the CRA</li>
      <li>Through your tax professional</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Step 6: Keep Records and Follow Up',
    desc: `After filing your taxes, keep records and follow up:
    <ul>
      <li>Save copies of your tax return and all supporting documents</li>
      <li>Check the status of your return and refund on the CRA website</li>
      <li>Review your Notice of Assessment (NOA) when you receive it</li>
    </ul>`
  },
  {
    id: 7,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you file your taxes in Canada:
    <ul>
      <li>Use the CRA’s My Account service to manage your tax affairs online</li>
      <li>Check for any tax benefits and credits you may be eligible for</li>
      <li>Consult the CRA website or a tax professional for guidance</li>
    </ul>`
  }
];

const TaxFiling = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to File Taxes in Canada</h2>
        {taxFilingData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>File Taxes on These Platforms</h2>
          <TaxPlatforms /> {/* Use the TaxPlatforms component */}
        </div>

        <div className="general-resources">
          <h2>General Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/taxes.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Taxes
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">
                Canada Revenue Agency
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully file your taxes in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default TaxFiling;
