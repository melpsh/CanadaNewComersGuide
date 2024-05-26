import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import SchoolPlatforms from "./SchoolPlatforms"; // Import the SchoolPlatforms component
import BackToTop from "./BackToTop";

const schoolFindingData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Requirements',
    desc: `Before looking for schools, consider your family's needs and preferences:
    <ul>
      <li>Type of School: Public, private, or charter.</li>
      <li>Location: Proximity to your home or workplace.</li>
      <li>Curriculum: Standard, IB, Montessori, etc.</li>
      <li>Special Programs: Language immersion, special education, gifted programs, etc.</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Research Online Platforms and Resources',
    desc: `There are several online platforms and resources where you can find information about schools:
    <ul>
      <li><a href="https://www.greatschools.org/canada/" target="_blank">GreatSchools</a></li>
      <li><a href="https://www.ourkids.net/school/school-search.php" target="_blank">Our Kids</a></li>
      <li><a href="https://www.schoolfinder.com/" target="_blank">SchoolFinder</a></li>
      <li><a href="https://www.compare-school-rankings.org/" target="_blank">Fraser Institute School Rankings</a></li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Visit School Websites',
    desc: `Visit the websites of schools you are interested in to gather detailed information:
    <ul>
      <li>School programs and curriculum</li>
      <li>Extracurricular activities</li>
      <li>Enrollment process</li>
      <li>School policies and values</li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Attend School Open Houses and Tours',
    desc: `Attend open houses and school tours to get a firsthand look at the school environment:
    <ul>
      <li>Meet teachers and staff</li>
      <li>Observe the facilities and classrooms</li>
      <li>Ask questions about the school community and programs</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Consult with Other Parents and Students',
    desc: `Talk to other parents and students to get their insights and experiences:
    <ul>
      <li>Join local parenting groups</li>
      <li>Participate in online forums and discussions</li>
      <li>Ask for recommendations and reviews</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Step 6: Review and Compare Your Options',
    desc: `Review and compare the schools based on your criteria:
    <ul>
      <li>Consider the pros and cons of each option</li>
      <li>Evaluate the school's fit for your child's needs and interests</li>
      <li>Make a list of your top choices</li>
    </ul>`
  },
  {
    id: 7,
    title: 'Step 7: Enroll Your Child',
    desc: `Once you have chosen a school, follow the enrollment process:
    <ul>
      <li>Complete the application forms</li>
      <li>Submit the required documents</li>
      <li>Meet any enrollment deadlines</li>
      <li>Prepare your child for the transition to the new school</li>
    </ul>`
  },
  {
    id: 8,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you find a school in Canada:
    <ul>
      <li>Check provincial or territorial education websites for specific information</li>
      <li>Consider the school's location and transportation options</li>
      <li>Visit the school during different times of the day to get a sense of the daily routine</li>
    </ul>`
  }
];

const SchoolFinding = () => {
  return (
    <Layout>
      <div className="container">
        <h2>How to Find Schools for Children in Canada</h2>
        {schoolFindingData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Find Schools on These Platforms</h2>
          <SchoolPlatforms /> {/* Use the SchoolPlatforms component */}
        </div>

        <div className="general-resources">
          <h2>General Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/education.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Education
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/public-health/services/health-promotion.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Health Promotion
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully find a school for your child in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
};

export default SchoolFinding;

