import React from 'react';
import './DoctorPlatforms.css';

const doctorPlatformsData = [
  {
    id: 1,
    name: 'Healthcare Connect (Ontario)',
    logo: '',
    link: 'https://www.healthcareconnect.gov.on.ca'
  },
  {
    id: 2,
    name: 'Medimap',
    logo: '',
    link: 'https://medimap.ca'
  },
  {
    id: 3,
    name: 'College of Physicians and Surgeons of BC',
    logo: '',
    link: 'https://www.cpsbc.ca'
  },
  {
    id: 4,
    name: 'Québec Family Doctor Finder',
    logo: '',
    link: 'https://www.quebec.ca/en/health/finding-a-resource/registering-with-a-family-doctor'
  }
];

const DoctorPlatforms = () => {
  return (
    <div className="doctor-platforms">
      {doctorPlatformsData.map(platform => (
        <div key={platform.id} className="doctor-platform-card">
          {/* <img src={platform.logo} alt={`${platform.name} logo`} /> */}
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default DoctorPlatforms;
