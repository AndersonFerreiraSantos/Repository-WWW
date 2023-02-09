import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export const route = (path: string, to: string) => {
    return (
        <Route path={path} element={to} />
    )
}