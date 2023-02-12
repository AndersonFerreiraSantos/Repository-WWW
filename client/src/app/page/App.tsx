import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect, memo, useMemo } from 'react';
import AuthService from '../../database/serviceFirebase.js'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { contextUser } from '../../util/Contexts.js';
import { DndProvider } from 'react-dnd'
import { Body } from './S_App.js';
import './reset.css';

//pages
import P_TestOfComponents from '../../pages/test/P_TestOfComponents.jsx';
import P_Footer from '../../pages/footer/P_Footer';
import P_Header from '../../pages/header/P_Header';
import P_Home from '../../pages/home/P_Home.js';

//components
import C_Loading_Full from '../../components/util/loading/C_Loading_Full.jsx'

const App = () => {

  const [isLoadingLoggerUser, setIsLoadingLoggerUser] = useState(true)
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
    <body>
      <DndProvider backend={HTML5Backend} >
        <div>
          {!isLoadingLoggerUser &&
            <contextUser.Provider value={{ logged, user, setUser }}>
              <BrowserRouter>
                <P_Header />
                <Body>
                  <Routes>
                    <Route path='/home' element={!user ? <P_Home /> : <Navigate to={'/test'} />} />
                    <Route path='/test' element={user ? <P_TestOfComponents /> : <Navigate to={'/home'} />} />
                  </Routes>
                </Body>
                <P_Footer />
              </BrowserRouter>
            </contextUser.Provider>}
        </div>
        {isLoadingLoggerUser && <C_Loading_Full />}
      </DndProvider>
    </body>
  );
}

export default App;
