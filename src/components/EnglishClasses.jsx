import React from "react";
import Layout from "./Layout";
import "./IDCard.css";
import EnglishPlatforms from "./EnglishPlatforms"; // Import the EnglishPlatforms component

const englishClassesData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Learning Needs and Goals',
    desc: `Before looking for English classes, consider your learning needs and goals:
    <ul>
      <li>Proficiency Level: Beginner, intermediate, or advanced.</li>
      <li>Learning Format: In-person, online, or hybrid.</li>
      <li>Schedule: Full-time, part-time, or flexible hours.</li>
      <li>Specific Goals: Improving conversation skills, academic English, business English, etc.</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Step 2: Research Online Platforms and Resources',
    desc: `There are several online platforms and resources where you can find English classes:
    <ul>
      <li><a href="https://www.duolingo.com" target="_blank">Duolingo</a></li>
      <li><a href="https://www.eslcourses.com" target="_blank">ESL Courses</a></li>
      <li><a href="https://www.britishcouncil.org" target="_blank">British Council</a></li>
      <li><a href="https://www.coursera.org" target="_blank">Coursera</a></li>
      <li><a href="https://www.udemy.com" target="_blank">Udemy</a></li>
    </ul>`
  },
  {
    id: 3,
    title: 'Step 3: Check Local Educational Institutions',
    desc: `Many local educational institutions offer English classes:
    <ul>
      <li>Universities and Colleges</li>
      <li>Community Centers</li>
      <li>Libraries</li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Utilize Newcomer Services',
    desc: `Many newcomer services provide English classes or can guide you to available resources:
    <ul>
      <li>Settlement agencies</li>
      <li>Non-profit organizations</li>
      <li>Government programs</li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Attend Classes and Practice Regularly',
    desc: `Once you find suitable classes, attend them regularly and practice:
    <ul>
      <li>Participate actively in classes</li>
      <li>Join language exchange programs</li>
      <li>Practice speaking with native speakers</li>
    </ul>`
  },
  {
    id: 6,
    title: 'Additional Tips and Resources',
    desc: `Here are some additional tips and resources to help you learn English in Canada:
    <ul>
      <li>Join local English conversation groups</li>
      <li>Watch English TV shows and movies</li>
      <li>Read English books and newspapers</li>
    </ul>`
  }
];

const EnglishClasses = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Finding English Classes for Newcomers in Canada</h2>
        {englishClassesData.map(step => (
          <div key={step.id} className="step">
            <h3>{step.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: step.desc }} />
          </div>
        ))}

        <div className="additional-resources">
          <h2>Find English Classes on These Platforms</h2>
          <EnglishPlatforms /> {/* Use the EnglishPlatforms component */}
        </div>

        <div className="general-resources">
          <h2>General Resources</h2>
          <ul>
            <li>
              <a href="https://www.canada.ca/en/services/immigration-citizenship.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Immigration and Citizenship
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/services/newcomers.html" target="_blank" rel="noopener noreferrer">
                Government of Canada: Services for Newcomers
              </a>
            </li>
          </ul>
          <p>By following these steps and utilizing the provided resources, you can successfully find English classes in Canada. Be sure to verify the specific requirements and procedures for your particular situation.</p>
        </div>
      </div>
    </Layout>
  );
};

export default EnglishClasses;
