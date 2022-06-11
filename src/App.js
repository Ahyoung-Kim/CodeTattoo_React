import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Entry from './pages/Entry';
import SignUp from './pages/SignUp';
import Header from './pages/Header';

const apiUrl = "http://3.39.196.91:3001/api";

const App = () => {

  return (
    <div>
      <Header />

      <section>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/login' element={<Login apiUrl={apiUrl} />} />
          <Route path='/register' element={<SignUp apiUrl={apiUrl} />} />
        </Routes>

      </section>
    </div>
  );
};

export default App;