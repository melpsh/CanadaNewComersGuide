import React from "react";
import InfoBlock from "./InfoBlock";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


const IDCard = () => {
  return(
    <NavLink to='IDCard'>
      <InfoBlock className="card" title="How to apply for Canadian ID" infoUrl="https://melpsh.github.io/CanadaNewComersGuide/canadian_id_info" />
    </NavLink>
      
  )
};

export default IDCard;