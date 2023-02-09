import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { contextUser } from '../../util/Contexts.js'
import { Body } from './S_App.js'
import './reset.css'

//pages
import P_TestOfComponents from '../../pages/test/P_TestOfComponents'
import P_Footer from '../../pages/footer/P_Footer'
import P_Header from '../../pages/header/P_Header'
import P_Home from '../../pages/home/P_Home'

function App() {

  
  return (
    <>
      <contextUser.Provider value={{}}>
        <BrowserRouter>
          <P_Header />
          <Body>
            <Routes>
              <Route path='/test' element={<P_TestOfComponents />} />
              <Route path='/home' element={<P_Home />} />
            </Routes>
          </Body>
          <P_Footer />
        </BrowserRouter>
      </contextUser.Provider>
    </>
  );
}

export default App;
