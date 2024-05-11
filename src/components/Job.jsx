import React from "react";
import InfoBlock from "./InfoBlock";
import { NavLink } from "react-router-dom";

const Job = () => {
  return (
    <NavLink to='Job'>
      <InfoBlock className="card" title="How to apply for a job" />

    </NavLink>
  )
};

export default Job;
