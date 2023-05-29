import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './routes/router'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
