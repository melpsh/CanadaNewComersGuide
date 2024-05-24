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
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import IntroductionToCanada from "./IntroductionToCanada";
import BackToTop from "./BackToTop";

function HomePage() {
  const sections = [
    { icon: faIdCard, title: "How to Apply for Canadian ID", link: "IDCard", description: "Learn how to get your provincial or territorial ID card." },
    { icon: faHospital, title: "How to Apply for Health Card", link: "HealthCard", description: "Steps to obtain a health card in your province or territory." },
    { icon: faUser, title: "How to Apply for SIN Number", link: "SINNumber", description: "Information on applying for a Social Insurance Number (SIN)." },
    { icon: faCreditCard, title: "How to Apply for Credit Card", link: "Creditcard", description: "Guide to applying for a credit card as a newcomer." },
    { icon: faUserFriends, title: "How to Find a Roommate", link: "Roommate", description: "Tips and resources for finding a roommate in Canada." },
    { icon: faSync, title: "How to Find Community", link: "community", description: "Connect with local communities and support groups." },
    { icon: faHome, title: "How to Find Accommodation", link: "Accomodation", description: "Resources for finding a place to live." },
    { icon: faBook, title: "How to Find English Classes", link: "EnglishClasses", description: "Locate English language classes and resources." },
    { icon: faHandsHelping, title: "How to Find Volunteer Experience", link: "Volunteer", description: "Opportunities for volunteering and gaining experience." },
    { icon: faUserMd, title: "How to Find Family Doctor", link: "Familydoctor", description: "Steps to find and register with a family doctor." },
    { icon: faSchool, title: "How to Find School for Children", link: "school", description: "Information on enrolling your children in school." },
    { icon: faFileAlt, title: "How to File Taxes", link: "taxes", description: "Guide to filing your taxes in Canada." },
  ];

  return (
    <Layout>
      <div className="container">
        <h1 className="mt-5 mb-4 text-center">Welcome to Canada</h1>
        <div className="intro mb-4 text-center">
          <p>
            Moving to a new country can be overwhelming. Our goal is to provide you with all the necessary information and resources you need to settle in Canada smoothly. Explore the sections below to find detailed guides on various aspects of settling in Canada.
          </p>
        </div>
        <div className="row">
          {sections.map((section) => (
            <div key={section.link} className="col-md-4 mb-4">
              <NavLink className="card canada-card" to={section.link}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={section.icon} className="me-2" size="2x" />
                  <h5 className="card-title mt-2">{section.title}</h5>
                  <p className="card-text">{section.description}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <IntroductionToCanada />
        <BackToTop />
      </div>
    </Layout>
  );
}

export default HomePage;
