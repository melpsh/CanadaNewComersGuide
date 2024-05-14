import React from "react";
import IDCard from "./IDCard";
import MSPCard from "./MSPCard";
import SINNumber from "./SINNumber";
import Job from "./Job";
import Accomodation from "./Accomodation";
import Creditcard from "./Creditcard";
import Roommate from "./Roommate";
import InfoBlock from "./InfoBlock";
import { NavLink, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <NavLink to='SignUp'>SignUp</NavLink>
      <NavLink to='Login'>Login</NavLink>
    <h1 className="mt-5 mb-4">Welcome to Canada</h1>
    <div className="row">
      <NavLink className="card col-md-4 mb-4 card-body " to='IDCard'>How to apply for Canadian ID</NavLink>
      <NavLink className="card col-md-4 mb-4 card-body " to='MSPCard'>How to apply for MSP</NavLink>
      <NavLink className="card col-md-4 mb-4 card-body " to='SINNumber'>How to apply for SIN number</NavLink>
      <NavLink className="card col-md-4 mb-4 card-body " to='Creditcard'>How to apply for Creditcard</NavLink>
      <NavLink className="card col-md-4 mb-4 card-body " to='Roommate'>How to find a roommate</NavLink>
      <NavLink className="card col-md-4 mb-4 card-body " to='Accomodation'>How to find Accomodation</NavLink>
    {/* <InfoBlock className="card" title="How to apply for Canadian ID" />
    <InfoBlock className="card" title="How to apply for MSP" />
    <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
    <InfoBlock className="card" title="How to find English classes" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
    <InfoBlock className="card" title="How to find get volunteer experience" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
    <InfoBlock className="card" title="How to find a community" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
    <InfoBlock className="card" title="How to find a family doctor" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
    <InfoBlock className="card" title="How to find a high scool" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
    <InfoBlock className="card" title="How to file taxes" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" />
    <InfoBlock className="card" title="Applications for new comers to Canada" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/sin_number_info" /> */}
      <Routes>
      <Route path ='/IDCard' element={<IDCard />}/>
      <Route path= '/MSPCard' element={<MSPCard />}/>
      {/* <IDCard path='IDCard'></IDCard>
      <MSPCard path='MSPCard'></MSPCard>
      <SINNumber path='SINNumber'></SINNumber>
      <Job path='Job'></Job>
      <Accomodation path='Accomodation'></Accomodation>
      <Creditcard path='Creditcard'></Creditcard>
      <Roommate path='Roommate'></Roommate> */}
      </Routes>
    </div>
  </div>
  )
}

export default HomePage;
