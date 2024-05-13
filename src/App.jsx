import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import InfoBlock from './components/InfoBlock';
import IDCard from './components/IDCard'
import MSPCard from './components/MSPCard';
import SINNumber from './components/SINNumber';
import Job from './components/Job';
import Accomodation from './components/Accomodation';
import Creditcard from './components/Creditcard';
import Roommate from './components/Roommate';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      {/* <Route path='*' element={<HomePage />} /> */}
      <Route path ='IDCard' element={<IDCard />}/>
      <Route path='MSPCard' element ={<MSPCard />}/>
      <Route path='SINNumber' element ={<SINNumber />}/>
      <Route path='Creditcard' element ={<Creditcard />}/>
      <Route path='Job' element ={<Job />}/>
      <Route path='Accomodation' element ={<Accomodation />}/>
      <Route path='Roommate' element ={<Roommate />}/>
    </Routes>
    </>
  );
};

export default App;
