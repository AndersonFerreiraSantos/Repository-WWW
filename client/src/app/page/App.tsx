import { BrowserRouter, Route, Routes, Navigate, redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthService from '../../database/serviceFirebase.js'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { contextUser, contextConfig } from '../../util/Contexts.js';
import { DndProvider } from 'react-dnd'
import { Body } from './S_App.js';
import './reset.css';

//pages
import P_Footer from '../../pages/footer/P_Footer';
import P_Header from '../../pages/header/P_Header';
import P_Home from '../../pages/home/P_Home.jsx';
import P_TestOfComponents from '../../pages/test/P_TestOfComponents.jsx';
//components
import C_Loading_Full from '../../components/util/loading/C_Loading_Full.jsx'
import R_Routes from '../routes/R_Routes.jsx';
const App = ({}) => {

  const [isLoadingLoggerUser, setIsLoadingLoggerUser] = useState(true)
  const [globalConfig, setGlobalConfig] = useState(true)
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});


  useEffect(() => {
    setLogged(false)
    AuthService.getLoggerUser().then((user) => {
      setIsLoadingLoggerUser(false);
      setUser(user);
      user ? setLogged(true) : setLogged(false);
    }).catch(() => {
      setIsLoadingLoggerUser(false);
      user ? setLogged(true) : setLogged(false);
    }).catch(() => {
      setIsLoadingLoggerUser(false);
      user ? setLogged(true) : setLogged(false);
    })
  }, []);

  return (
    <R_Routes />
  );
}

export default App;
