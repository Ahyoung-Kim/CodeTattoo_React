import './App.css';
import { Reset } from 'styled-reset';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './pages/Header';
import TattooistEnroll from './pages/TattooistEnroll';
import Footer from './pages/Footer';
import Category from './pages/Category';
import { EntrySection } from './styledComponents';
import Entry from './pages/Entry';
import NewDraft from './pages/NewDraft';
import ImgLoad from './pages/ImgLoad';

const apiUrl = "http://3.39.196.91:3001/api";

const App = () => {

  return (
    <div className='main-font'>
      <Reset />
      <Header />

      <EntrySection>
        <Category />

        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/login' element={<Login apiUrl={apiUrl} />} />
          <Route path='/register' element={<SignUp apiUrl={apiUrl} />} />
          <Route path='/tattooist_enrollment' element={<TattooistEnroll apiUrl={apiUrl} />} />
          <Route path='/crop_img' element={<NewDraft />} /> 
          <Route path='/img_load' element={<ImgLoad />} />       
        </Routes>

      </EntrySection>

      <Footer />
    </div>
  );
};

export default App;