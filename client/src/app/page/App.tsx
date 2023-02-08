import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './S_App.css'

//pages
import P_TestOfComponents from '../../pages/test/P_TestOfComponents'
import P_Footer from '../../pages/footer/P_Footer'
import P_Header from '../../pages/header/P_Header'
import P_Home from '../../pages/home/P_Home'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <P_Header /> */}
        <Routes>
          <Route path='/' element={<P_TestOfComponents />} />
          <Route path='/home' element={<P_Home />} />
        </Routes>
        {/* <P_Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
