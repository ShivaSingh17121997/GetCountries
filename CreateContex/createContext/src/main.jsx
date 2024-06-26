import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './AuthContex/AuthContextProvider.jsx'
import ThemeContex from './AuthContex/ThemeContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthContextProvider>
    <ThemeContex>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContex>
  </AuthContextProvider>
)
