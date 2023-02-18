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
import R_Routes from '../routes/R_Routes.jsx'

//components
import C_Loading_Full from '../../components/util/loading/C_Loading_Full.jsx'
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

  const PriveteRoutes = ({ component: Component, ...rest }) => {
    console.log(logged);
    return (
      logged ? <R_Routes {...rest} render={(props) => { <Component {...props} /> }} /> : <h1>teste</h1>
    )
  }

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
                      <PriveteRoutes />
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

export default App;
