import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faHospital, faUser, faCreditCard, faUserFriends, faHome, faBook, faHandsHelping, faUserMd, faSchool, faFileAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import './Homepage.css';

function HomePage() {
  return (
    <Layout>
      <div className="container">
        <div className="text-end"></div>
        <h1 className="mt-5 mb-4">Welcome to Canada</h1>
        <div className="row">
          <NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='IDCard'>
            <FontAwesomeIcon icon={faIdCard} className="me-2" />
            How to apply for Canadian ID
          </NavLink>
          <NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='MSPCard'>
            <FontAwesomeIcon icon={faHospital} className="me-2" />
            How to apply for MSP
          </NavLink>
          <NavLink className="card col-md-4 mb-4 card-body" to='SINNumber'>
            <FontAwesomeIcon icon={faUser} className="me-2" />
            How to apply for SIN number
          </NavLink>
          <NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='Creditcard'>
            <FontAwesomeIcon icon={faCreditCard} className="me-2" />
            How to apply for Creditcard
          </NavLink>
          <NavLink className="card col-md-4 mb-4 card-body mr-md-4" to='Roommate'>
            <FontAwesomeIcon icon={faUserFriends} className="me-2" />
            How to find a roommate
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='Community'>
          <FontAwesomeIcon icon={faSync} className="me-2" />
            How to find community
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='Accomodation'>
            <FontAwesomeIcon icon={faHome} className="me-2" />
            How to find Accomodation
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='englishClass'>
            <FontAwesomeIcon icon={faBook} className="me-2" />
            How to find English Classes
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='Volunteer'>
            <FontAwesomeIcon icon={faHandsHelping} className="me-2" />
            How to find volunteer experience
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='familydr'>
            <FontAwesomeIcon icon={faUserMd} className="me-2" />
            How to find family doctor
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='school'>
            <FontAwesomeIcon icon={faSchool} className="me-2" />
            How to find school for children
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='taxes'>
            <FontAwesomeIcon icon={faFileAlt} className="me-2" />
            How to file taxes
          </NavLink>
          <NavLink className="card col-md-4 mb-4 mr-4 card-body" to='register'>
            <FontAwesomeIcon icon={faUserPlus} className="me-2" />
            Register
          </NavLink>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;
