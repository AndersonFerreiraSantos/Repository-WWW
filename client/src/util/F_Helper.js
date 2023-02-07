import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export const route = (path, to) => {
    return (
        <Route path={path} element={to} />
    )
}



