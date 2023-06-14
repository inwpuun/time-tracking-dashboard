import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { Daily } from './mainPage/type/Daily.tsx'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
