import { BrowserRouter, Route, Routes, Navigate, redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthService from '../../database/serviceFirebase.js'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { contextUser, contextConfig } from '../../util/Contexts.js';
import { DndProvider } from 'react-dnd'
import { Body } from '../page/S_App';
import '../page/reset.css';

//pages
import P_Footer from '../../pages/footer/P_Footer';
import P_Header from '../../pages/header/P_Header';
import P_Home from '../../pages/home/P_Home.jsx';
import P_TestOfComponents from '../../pages/test/P_TestOfComponents.jsx';
//components
import C_Loading_Full from '../../components/util/loading/C_Loading_Full.jsx'
const R_Routes = ({}) => {

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
    <body>
      <DndProvider backend={HTML5Backend} >
        <div>
          {!isLoadingLoggerUser &&
            <contextUser.Provider value={{ logged, user, setUser }}>
              <contextConfig.Provider value={{ logged, globalConfig, setGlobalConfig }}>
                <BrowserRouter>
                  <P_Header />
                  <Body showMenuLateral={globalConfig.showMenuLateral}>
                    <Routes >
                      <Route path='/home' element={<P_Home />} />
                      <Route path='/elementar' element={<P_TestOfComponents />} />
                      <Route path='*' element={<h1>Page not fount</h1>} />
                    </Routes>
                  </Body>
                  <P_Footer />
                </BrowserRouter>
              </contextConfig.Provider>
            </contextUser.Provider>}
        </div>
        {isLoadingLoggerUser && <C_Loading_Full />}
      </DndProvider>
    </body >
  );
}

export default R_Routes;
