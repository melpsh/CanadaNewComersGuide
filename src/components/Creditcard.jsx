import React from "react";
import InfoBlock from "./InfoBlock";
import { NavLink } from "react-router-dom";

const Creditcard = () => {
  return (
    <NavLink to='Creditcard'>
      <InfoBlock className="card" title="How to apply for a credit card" />
    </NavLink>
  )
};

export default Creditcard;
