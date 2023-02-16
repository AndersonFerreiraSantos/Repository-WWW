import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import P_Home from '../../pages/home/P_Home';
import P_TestOfComponents from '../../pages/test/P_TestOfComponents';

export const R_Routes = () => {
    return (
        <>
            <Route exact path='/home' element={<P_Home />} />
            <Route exact path='/elementar' element={<P_TestOfComponents />} />
        </>
    )
}

export default R_Routes;