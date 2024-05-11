import React from "react";
import InfoBlock from "./InfoBlock";
import { NavLink } from "react-router-dom";

const SINNumber = () => {
  return (
    <NavLink to='SINNumber'>
      <InfoBlock className="card" title="How to apply for SIN number" />
    </NavLink>
  )
};

export default SINNumber;
