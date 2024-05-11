import React from "react";
import InfoBlock from "./InfoBlock";
import { NavLink } from "react-router-dom";

const Accomodation = () => {
  return (
    <NavLink to='Accomodation'>
      <InfoBlock className="card" title="How to find accomodation" />
    </NavLink>
  )
};

export default Accomodation;
