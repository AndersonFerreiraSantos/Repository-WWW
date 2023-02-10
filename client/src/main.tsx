import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/page/App'
import "./i18n/translation"
console.log('teste')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
