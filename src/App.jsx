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

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6646f9a7002e21400b4f');

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
      {/* <Route path='register' element={<Register />}/> */}
    </Routes>
    </>
  );
};

export default App;
