import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IDCard from './components/IDCard'
import SINNumber from './components/SINNumber';
import Job from './components/Job';
import Accomodation from './components/Accomodation';
import Creditcard from './components/Creditcard';
import Roommate from './components/Roommate';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Register from './components/Register';
import { Client } from 'appwrite';
import HealthCard from './components/HealthCard';
import EnglishClasses from './components/EnglishClasses';
import FindFamilyDoctor from './components/FindFamilyDoctor';
import FindVolunteerExperience from './components/FindVolunteerExperience';
import FindCommunityEvents from './components/FindCommunityEvents';
import TaxFiling from './components/TaxFiling';
import SchoolFinding from './components/SchoolFinding';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      {/* <Route path='SignUp' element={<SignUp />}/>
      <Route path='Login' element={<Login />}/> */}
      <Route path ='IDCard' element={<IDCard />}/>
      {/* <Route path='MSPCard' element ={<MSPCard />}/> */}
      <Route path='HealthCard' element ={<HealthCard />}/>
      <Route path='SINNumber' element ={<SINNumber />}/>
      <Route path='Creditcard' element ={<Creditcard />}/>
      <Route path='Job' element ={<Job />}/>
      <Route path='Accomodation' element ={<Accomodation />}/>
      <Route path='Roommate' element ={<Roommate />}/>
      <Route path='reset-password' element={<ResetPassword />}/>
      <Route path='EnglishClasses' element={<EnglishClasses />}/>
      <Route path='FamilyDoctor' element={<FindFamilyDoctor />}/>
      <Route path='Volunteer' element={<FindVolunteerExperience />}/>
      <Route path='community' element={<FindCommunityEvents />}/>
      <Route path='taxes' element={<TaxFiling />}/>
      <Route path='school' element={<SchoolFinding />}/>
      {/* <Route path='register' element={<Register />}/> */}
    </Routes>
    </>
  );
};

export default App;
