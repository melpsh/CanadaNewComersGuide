import React from 'react';
import InfoBlock from './components/InfoBlock';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Welcome to Canada</h1>
      <div className="row">
        <InfoBlock className="card" title="How to apply for Canadian ID" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/canadian_id_info" />
        <InfoBlock className="card" title="How to apply for MSP card" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/msp_card_info" />
        <InfoBlock className="card" title="How to apply for SIN number" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to apply for a job" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find accomodation" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to apply for a credit card" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a roommate" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find English classes for new-comers" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find get volunteer experience" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a family doctor" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
        <InfoBlock className="card" title="How to find a high scool" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      </div>
      {/* Add more rows of InfoBlocks here */}
    </div>
  );
};

export default HomePage;
