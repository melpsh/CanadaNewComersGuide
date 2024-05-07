import React from 'react';
import InfoBlock from './components/InfoBlock';
import IDCard from './components/IDCard'
import MSPCard from './components/MSPCard';
import SINNumber from './components/SINNumber';
import Job from './components/Job';
import Accomodation from './components/Accomodation';
import Creditcard from './components/Creditcard';
import Roommate from './components/Roommate';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Welcome to Canada</h1>
      <div className="row">
        <IDCard></IDCard>
        <MSPCard></MSPCard>
        <SINNumber></SINNumber>
        <Job></Job>
        <Accomodation></Accomodation>
        <Creditcard></Creditcard>
        <Roommate></Roommate>
        <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find English classes" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find get volunteer experience" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a family doctor" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a high scool" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to file taxes" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="Applications for new comers to Canada" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      </div>
      {/* Add more rows of InfoBlocks here */}
    </div>
  );
};

export default HomePage;
