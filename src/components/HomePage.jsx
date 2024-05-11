import React from "react";
import IDCard from "./IDCard";
import MSPCard from "./MSPCard";
import SINNumber from "./SINNumber";
import Job from "./Job";
import Accomodation from "./Accomodation";
import Creditcard from "./Creditcard";
import Roommate from "./Roommate";
import InfoBlock from "./InfoBlock";

function HomePage() {
  return (
    <div className="container">
    <h1 className="mt-5 mb-4">Welcome to Canada</h1>
    <div className="row">
      <IDCard path='IDCard'></IDCard>
      <MSPCard path='MSPCard'></MSPCard>
      <SINNumber path='SINNumber'></SINNumber>
      <Job path='Job'></Job>
      <Accomodation path='Accomodation'></Accomodation>
      <Creditcard path='Creditcard'></Creditcard>
      <Roommate path='Roommate'></Roommate>
      {/* <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      <InfoBlock className="card" title="How to find English classes" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      <InfoBlock className="card" title="How to find get volunteer experience" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      <InfoBlock className="card" title="How to find a family doctor" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      <InfoBlock className="card" title="How to find a high scool" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      <InfoBlock className="card" title="How to file taxes" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
      <InfoBlock className="card" title="Applications for new comers to Canada" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" /> */}
    </div>
  </div>
  )
}

export default HomePage;
