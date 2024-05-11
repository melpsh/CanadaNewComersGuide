import React from "react";
import InfoBlock from "./InfoBlock";
import { NavLink } from "react-router-dom";

const MSPCard = () => {
  return (
    <NavLink to='MSPCard'>
      <InfoBlock className="card" title="How to apply for MSP card" />
    </NavLink>
  )
};

export default MSPCard;
