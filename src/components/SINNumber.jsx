import React from "react";
import Layout from "./Layout";
import "./IDCard.css";

const sinData = [
  {
    id: 1,
    title: 'Step 1: Determine Eligibility',
    desc: `Before applying, make sure you meet the basic eligibility requirements. Generally, you must be:
    <ul>
      <li>A Canadian citizen</li>
      <li>A permanent resident</li>
      <li>A temporary resident with a valid work or study permit</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Gather Required Documents',
    desc: `You'll need to present various documents to prove your identity and legal status in Canada. These documents typically include:
    <ul>
      <li>Primary Documents (one of the following):
        <ul>
          <li>Birth certificate</li>
          <li>Certificate of Canadian citizenship</li>
          <li>Permanent resident card</li>
          <li>Confirmation of permanent residence</li>
          <li>Work permit</li>
          <li>Study permit (with a contract for employment)</li>
        </ul>
      </li>
      <li>Supporting Documents (if applicable):
        <ul>
          <li>Any legal change of name document, such as a marriage certificate or legal name change certificate</li>
        </ul>
      </li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Complete the Application Form',
    desc: `You can apply for a SIN either online, by mail, or in person. Here are the steps for each method:
    <ul>
      <li><strong>Online Application:</strong>
        <ul>
          <li>Visit the <a href="https://www.canada.ca/en/employment-social-development/services/sin/apply.html" target="_blank">Service Canada website</a></li>
          <li>Complete the online application form</li>
          <li>Upload digital copies of your required documents</li>
        </ul>
      </li>
      <li><strong>By Mail:</strong>
        <ul>
          <li>Download and complete the SIN application form from the Service Canada website</li>
          <li>Mail the form along with photocopies of your required documents to the address provided on the website</li>
        </ul>
      </li>
      <li><strong>In Person:</strong>
        <ul>
          <li>Visit a Service Canada Centre with your completed application form and original documents</li>
        </ul>
      </li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Submit Your Application',
    desc: `Submit your application online, by mail, or in person according to the method you have chosen. Ensure that all documents are complete and accurate to avoid delays.`
  },
  {
    id: 5,
    title: 'Step 5: Wait for Processing',
    desc: `Processing times vary depending on the method of application:
    <ul>
      <li>Online: Typically within a few days</li>
      <li>By Mail: Several weeks</li>
      <li>In Person: Immediate issuance in most cases</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Step 6: Receive Your SIN',
    desc: `Once your application is processed, you will receive your SIN. If you applied in person, you might receive it immediately. For online and mail applications, you will receive your SIN by mail.`
  },
  {
    id: 7,
    title: 'Additional Tips and Resources',
    desc: `Keep your SIN secure: Do not carry your SIN card or document with you unnecessarily. Keep it in a safe place to prevent identity theft.
    <br/>
    Update your SIN records: If you change your name or status, update your SIN records with Service Canada.
    <br/>
    Resources: Visit the <a href="https://www.canada.ca/en/employment-social-development/services/sin.html" target="_blank">Service Canada website</a> for more information and access to application forms.`
  }
];


const SINNumber = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to Get a Social Insurance Number (SIN) in Canada</h2>
        {sinData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Additional Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/employment-social-development/services/sin/apply.html" target="_blank" rel="noopener noreferrer">
                Apply for a SIN Online
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/employment-social-development/services/sin.html" target="_blank" rel="noopener noreferrer">
                Service Canada: SIN Information
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/employment-social-development/services/sin/reports.html" target="_blank" rel="noopener noreferrer">
                Update Your SIN Record
              </a>
            </li>
          </ul>
        </div>

        <div className="general-resources">
          <h2>General Government Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Benefits and Services
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/services/immigration-citizenship.html" target="_blank" rel="noopener noreferrer">
                Immigration and Citizenship
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully obtain a Social Insurance Number (SIN) in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default SINNumber;
