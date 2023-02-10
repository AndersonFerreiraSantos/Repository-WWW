import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, {useState, useEffect, memo, useMemo} from 'react'
import { contextUser } from '../../util/Contexts.js'
import { Body } from './S_App.js'
import './reset.css'

//pages
import P_TestOfComponents from '../../pages/test/P_TestOfComponents'
import P_Footer from '../../pages/footer/P_Footer'
import P_Header from '../../pages/header/P_Header'
import P_Home from '../../pages/home/P_Home'

const App = () => {
const render = useMemo(() => {
  console.log('app')
  return(
    <contextUser.Provider value={{}}>
    <BrowserRouter>
      <Body>
        <P_Header />
        <Routes>
        </Routes>
      </Body>
      <P_Footer />
    </BrowserRouter>
  </contextUser.Provider>
  )
},[])
  return (
    <>
      {render}
    </>
  );
}

export default memo(App);
