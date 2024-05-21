import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faHospital,
  faUser,
  faCreditCard,
  faUserFriends,
  faHome,
  faBook,
  faHandsHelping,
  faUserMd,
  faSchool,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import './HomePage.css';

function HomePage() {
  const sections = [
    { icon: faIdCard, title: "How to apply for Canadian ID", link: "IDCard" },
    { icon: faHospital, title: "How to apply for Health Card", link: "HealthCard" },
    { icon: faUser, title: "How to apply for SIN number", link: "SINNumber" },
    { icon: faCreditCard, title: "How to apply for Creditcard", link: "Creditcard" },
    { icon: faUserFriends, title: "How to find a roommate", link: "Roommate" },
    { icon: faSync, title: "How to find community", link: "community" },
    { icon: faHome, title: "How to find Accommodation", link: "Accomodation" },
    { icon: faBook, title: "How to find English Classes", link: "EnglishClasses" },
    { icon: faHandsHelping, title: "How to find volunteer experience", link: "Volunteer" },
    { icon: faUserMd, title: "How to find family doctor", link: "Familydoctor" },
    { icon: faSchool, title: "How to find school for children", link: "school" },
    { icon: faFileAlt, title: "How to file taxes", link: "taxes" },
  ];

  return (
    <Layout>
      <div className="container">
        <h1 className="mt-5 mb-4 text-center">Welcome to Canada</h1>
        <div className="row">
          {sections.map((section) => (
            <NavLink key={section.link} className="card col-md-4 mb-4 card-body canada-card" to={section.link}>
              <FontAwesomeIcon icon={section.icon} className="me-2" />
              {section.title}
            </NavLink>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
