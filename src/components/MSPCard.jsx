import React from "react";
import InfoBlock from "./InfoBlock";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import Accordion from "./Accordion";

const data = [
  {
    id: 1,
    title: 'Step 1: Determine Your Province or Territory',
    desc: `Identify the province or territory you are settling in as the health insurance process and requirements differ by location.`
  },
  {
    id: 2,
    title: 'Step 2: Check Eligibility',
    desc: `Ensure you meet the residency requirements for the province or territory. Typically, you need to be physically present and intend to make the province your home.`
  },
  {
    id: 3,
    title: 'Step 3: Gather Required Documents',
    desc: `You'll need to present various documents to prove your identity, residency, and legal status in Canada. These documents typically include:

    Proof of Identity (one or more of the following):
    - Passport
    - Birth certificate
    - Permanent resident card

    Proof of Residency (one or more of the following):
    - Utility bill
    - Rental agreement or lease
    - Bank statement

    Proof of Legal Status:
    - Visa
    - Work permit
    - Study permit
    - Permanent resident card`
  },
  {
    id: 4,
    title: 'Step 4: Complete the Application Form',
    desc: `Visit the provincial or territorial health insurance website to access the application form. Below are links and specific steps for each province and territory:

    Ontario: [OHIP](https://www.ontario.ca/page/apply-ohip-and-get-health-card)
    Quebec: [RAMQ](https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/registration/Pages/registration.aspx)
    British Columbia: [MSP](https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp)
    Alberta: [AHCIP](https://www.alberta.ca/ahcip.aspx)
    Manitoba: [Manitoba Health](https://www.gov.mb.ca/health/mhsip/)
    Saskatchewan: [Saskatchewan Health](https://www.ehealthsask.ca/residents/health-cards/Pages/default.aspx)
    Nova Scotia: [MSI](https://novascotia.ca/dhw/msi/)
    New Brunswick: [Medicare](https://www2.gnb.ca/content/gnb/en/departments/health/MedicarePrescriptionDrugPlan.html)
    Prince Edward Island: [PEI Health](https://www.princeedwardisland.ca/en/service/register-pei-health-card)
    Newfoundland and Labrador: [MCP](https://www.gov.nl.ca/hcs/mcp/)
    Northwest Territories: [NWT Health](https://www.hss.gov.nt.ca/en/services/nwt-health-care-plan/apply-health-care-card)
    Yukon: [Yukon Health](https://yukon.ca/en/health-and-wellness/health-care-insurance-plan)
    Nunavut: [Nunavut Health](https://www.gov.nu.ca/health/information/health-care-card)`
  },
  {
    id: 5,
    title: 'Step 5: Submit Your Application',
    desc: `Follow the submission instructions for your specific province or territory. This usually involves mailing your application and supporting documents or applying in person.`
  },
  {
    id: 6,
    title: 'Step 6: Wait for Processing',
    desc: `Processing times vary by province and territory, typically ranging from a few weeks to a couple of months.`
  },
  {
    id: 7,
    title: 'Step 7: Receive Your Health Card',
    desc: `Once your application is processed and approved, you will receive your health card by mail.`
  },
  {
    id: 8,
    title: 'Additional Tips and Resources',
    desc: `Interim Health Coverage: Purchase private health insurance to cover you during any waiting period before your provincial or territorial health coverage begins.
    Healthcare Services: Familiarize yourself with local healthcare services, including family doctors, clinics, and hospitals.
    Update Information: Ensure you update your address with your provincial or territorial health authority if you move.
    Community Support: Look for newcomer services and community resources in your area for additional support.`
  }
];

const MSPCard = () => {
  return (
    <Layout>
      <p> Each province and territory in Canada has its own health insurance plan and application process. Here’s a general guide for obtaining a health card in various provinces and territories across Canada:</p>
      <Accordion data={data} />
    </Layout>

  )
};

export default MSPCard;
