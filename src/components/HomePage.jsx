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
import Layout from "./Layout";
import './Homepage.css'

function HomePage() {
  return (
    <Layout>
          <div className="container">

<div class="text-end">

</div>
<h1 className="mt-5 mb-4">Welcome to Canada</h1>
<div className="row">
<NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='IDCard'>How to apply for Canadian ID</NavLink>
<NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='MSPCard'>How to apply for MSP</NavLink>
<NavLink className="card col-md-4 mb-4 card-body" to='SINNumber'>How to apply for SIN number</NavLink>
<NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='Creditcard'>How to apply for Creditcard</NavLink>
<NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='Roommate'>How to find a roommate</NavLink>



  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='Roommate'>How to find a roommate</NavLink>
  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='Community'>How to find community</NavLink>
  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='Accomodation'>How to find Accomodation</NavLink>
  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='englishClass'>How to find English Classes</NavLink>
  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='Volunteer'>How to find volunteer experience</NavLink>
  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='familydr'>How to find family doctor</NavLink>
  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='school'>How to find school for children</NavLink>
  <NavLink className="card col-md-4 mb-4 mr-4 card-body " to='taxes'>How to file taxes</NavLink>

  <Routes>
  <Route path ='/IDCard' element={<IDCard />}/>
  <Route path= '/MSPCard' element={<MSPCard />}/>
  

  </Routes>
</div>
</div>
    </Layout>

  )
}

export default HomePage;
