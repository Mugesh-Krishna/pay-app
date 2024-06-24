import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Test from './Test';
import Sidebar from './sidebar/sidebar';
import Signup from './signup/signup';
import Stater from './stater/stater';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './payment/payment';
import Documents from './documentUpload/Documents';
import Managingaccount from './managingaccount/Managingaccount';
import Cashback from './cashback/Cashback';
import  get  from 'lodash/get';
import PartytownScript from './partytown/partyTown';

function App() {
  console.log(get({},'mmk','kmm'));
  return (
    <Router>
      <div className="App">
      <PartytownScript/>

        <Routes>
          <Route path="/" element={<Stater />} />
          <Route path="/test" element={<Test />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/payments' element={<Payment/>}/>
          <Route path='/documents' element={<Documents/>}/>
          <Route path='/managing' element={<Managingaccount/>}/>
          <Route path='/cashback' element={<Cashback/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
