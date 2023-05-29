import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/home/home'
import Summary from '../pages/summary/summary'

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
